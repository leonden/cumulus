'use strict';

const get = require('lodash/get');

const { parseSQSMessageBody, sendSQSMessage } = require('@cumulus/aws-client/SQS');

const Logger = require('@cumulus/logger');
const {
  getKnexClient,
} = require('@cumulus/db');
const {
  UnmetRequirementsError,
} = require('@cumulus/errors');
const {
  getMessageAsyncOperationId,
} = require('@cumulus/message/AsyncOperations');
const {
  getCollectionNameAndVersionFromMessage,
} = require('@cumulus/message/Collections');
const {
  getMessageExecutionParentArn,
} = require('@cumulus/message/Executions');
const { getCumulusMessageFromExecutionEvent } = require('@cumulus/message/StepFunctions');

const {
  getCollectionCumulusId,
  getMessageProviderCumulusId,
  getAsyncOperationCumulusId,
  getParentExecutionCumulusId,
} = require('../../lib/writeRecords/utils');

const {
  shouldWriteExecutionToPostgres,
  writeExecutionRecordFromMessage,
} = require('../../lib/writeRecords/write-execution');

const {
  writePdr,
} = require('./write-pdr');

const {
  writeGranulesFromMessage,
} = require('../../lib/writeRecords/write-granules');

const log = new Logger({ sender: '@cumulus/api/lambdas/sf-event-sqs-to-db-records' });

/**
 * Write records to data stores.
 *
 * @param {Object} params
 * @param {Object} params.cumulusMessage - Cumulus workflow message
 * @param {Knex} params.knex - Knex client
 * @param {Object} [params.testOverrides]
 *   Optional override/mock object used for testing
 */
const writeRecords = async ({
  cumulusMessage,
  knex,
  testOverrides = {},
}) => {
  const messageCollectionNameVersion = getCollectionNameAndVersionFromMessage(cumulusMessage);
  const messageAsyncOperationId = getMessageAsyncOperationId(cumulusMessage);
  const messageParentExecutionArn = getMessageExecutionParentArn(cumulusMessage);
  const [
    collectionCumulusId,
    asyncOperationCumulusId,
    parentExecutionCumulusId,
  ] = await Promise.all([
    getCollectionCumulusId(
      messageCollectionNameVersion,
      knex
    ),
    getAsyncOperationCumulusId(
      messageAsyncOperationId,
      knex
    ),
    getParentExecutionCumulusId(
      messageParentExecutionArn,
      knex
    ),
  ]);

  const fieldsToMeetRequirements = {
    messageCollectionNameVersion,
    collectionCumulusId,
    messageAsyncOperationId,
    asyncOperationCumulusId,
    messageParentExecutionArn,
    parentExecutionCumulusId,
  };
  if (!shouldWriteExecutionToPostgres(fieldsToMeetRequirements)) {
    log.debug(`Could not satisfy requirements for writing records, fieldsToMeetRequirements: ${JSON.stringify(fieldsToMeetRequirements)}`);
    throw new UnmetRequirementsError('Could not satisfy requirements for writing records to PostgreSQL. No records written to the database.');
  }

  const executionCumulusId = await writeExecutionRecordFromMessage({
    cumulusMessage,
    collectionCumulusId,
    asyncOperationCumulusId,
    parentExecutionCumulusId,
    knex,
  });

  const providerCumulusId = await getMessageProviderCumulusId(cumulusMessage, knex);

  const pdrCumulusId = await writePdr({
    cumulusMessage,
    collectionCumulusId,
    providerCumulusId,
    knex,
    executionCumulusId,
  });

  return writeGranulesFromMessage({
    cumulusMessage,
    providerCumulusId,
    executionCumulusId,
    pdrCumulusId,
    knex,
    testOverrides,
  });
};

function extractCollection(cumulusMessage) {
  try {
    return cumulusMessage.meta.collection.name;
  } catch {
    return null;
  }
}

function extractGranules(cumulusMessage) {
  try {
    return cumulusMessage.payload.granules.map((granule) => granule.granuleId);
  } catch {
    return null;
  }
}

function extractExecution(executionEvent) {
  try {
    return executionEvent.detail.executionArn;
  } catch {
    return null;
  }
}

function extractStateMachine(executionEvent) {
  try {
    return executionEvent.detail.stateMachineArn;
  } catch {
    return null;
  }
}

async function formatCumulusDLQMessage(message, error) {
  const executionEvent = parseSQSMessageBody(message);
  const errorString = error.toString();
  const execution = extractExecution(executionEvent) || 'none';
  const stateMachine = extractStateMachine(executionEvent) || 'none';
  let collection;
  let granule;
  try {
    const cumulusMessage = await getCumulusMessageFromExecutionEvent(executionEvent);
    collection = extractCollection(cumulusMessage) || 'none';
    granule = extractGranules(cumulusMessage) || 'none';
  } catch {
    collection = 'none';
    granule = 'none';
  }

  return {
    ...message,
    error: errorString,
    collection,
    granule,
    execution,
    stateMachine,
  };
}

const handler = async (event) => {
  const knex = await getKnexClient({
    env: {
      ...process.env,
      ...event.env,
    },
  });

  const sqsMessages = get(event, 'Records', []);
  const batchItemFailures = [];

  await Promise.all(sqsMessages.map(async (message) => {
    let cumulusMessage;
    const executionEvent = parseSQSMessageBody(message);
    try {
      cumulusMessage = await getCumulusMessageFromExecutionEvent(executionEvent);
    } catch (error) {
      log.error(`Writing message failed on getting message from execution event: ${JSON.stringify(message)}`, error);
      return batchItemFailures.push({ itemIdentifier: message.messageId });
    }
    try {
      return await writeRecords({ ...event, cumulusMessage, knex });
    } catch (error) {
      log.error(`Writing message failed: ${JSON.stringify(message)}`, error);
      const dlqMessage = await formatCumulusDLQMessage(message, error);
      return sendSQSMessage(
        process.env.DeadLetterQueue,
        dlqMessage
      );
    }
  }));

  return { batchItemFailures };
};

module.exports = {
  handler,
  writeRecords,
};
