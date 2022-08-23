const fs = require('fs');
const pMap = require('p-map');
const {
  addCollections,
  addProviders,
  cleanupCollections,
  cleanupProviders,
} = require('@cumulus/integration-tests');
const { updateCollection } = require('@cumulus/integration-tests/api/api');
const { deleteExecution } = require('@cumulus/api-client/executions');

const { LambdaStep } = require('@cumulus/integration-tests/sfnStep');
const { sqs } = require('@cumulus/aws-client/services');
const { getGranule } = require('@cumulus/api-client/granules');
const { randomString } = require('@cumulus/common/test-utils');
const {
  waitForApiStatus,
} = require('../helpers/apiUtils');

const { buildAndExecuteWorkflow } = require('../helpers/workflowUtils');
const {
  loadConfig,
  createTimestampedTestId,
  createTestSuffix,
  greenConsoleLog,
  redConsoleLog,
  yellowConsoleLog,
  blueConsoleLog,
} = require('../helpers/testUtils');

const {
  cleanupLoadTestGranules,
  setupGranulesForIngestLoadTestWithPassthroughWorkflow,
} = require('../helpers/granuleUtils');

const workflowName = 'QueueGranules';
const inputPayloadFilename = './spec/loadTest/ingestLoadTestPassthrough.input.payload.json';
const inputPayloadJson = fs.readFileSync(inputPayloadFilename, 'utf8');

const providersDir = './data/providers/s3/';
const collectionsDir = './data/collections/s3_MOD09GQ_006';
const granuleRegex = '^MOD09GQ\\.A[\\d]{7}\\.[\\w]{6}\\.006\\.[\\d]{13}$';

// ** Configurable Variables

const granuleCountPerWorkflow = 50; // 450 granules per workflow is the max allowable by the API
const totalWorkflowCount = 12; // number of workflows to fire off

const granuleCountThreshold = 0.95;

const totalInputPayloads = [];
const queueGranulesExecutionArns = [];
const queueGranulesChildExecutionArns = [];
const testSuffixes = [];
const totalGranulesCompleted = [];

let config;
let queueUrl;
let workflowExecution;
let inputPayload;
let beforeAllFailed = false;
let colorConsoleLog = redConsoleLog();

const batchGranulesProcessing = async (nthWorkflow) => {
  console.log(yellowConsoleLog(), `\n___ Executing ${nthWorkflow}/${totalWorkflowCount} ${workflowName} workflows ___`);

  const testId = createTimestampedTestId(config.stackName, 'GranuleIngestLoadTest');
  const testSuffix = `${createTestSuffix(testId)}_${randomString()}`;

  const collection = { name: `MOD09GQ${testSuffix}`, version: '006' };
  const provider = { id: `s3_provider${testSuffix}` };

  // populate collections, providers and test data
  await Promise.all([
    addCollections(
      config.stackName,
      config.bucket,
      collectionsDir,
      testSuffix
    ),
    addProviders(
      config.stackName,
      config.bucket,
      providersDir,
      config.bucket,
      testSuffix
    ),
  ]);
  await updateCollection({
    prefix: config.stackName,
    collection,
    updateParams: { duplicateHandling: 'replace' },
  });

  inputPayload = await setupGranulesForIngestLoadTestWithPassthroughWorkflow(
    config.bucket,
    inputPayloadJson,
    granuleCountPerWorkflow,
    granuleRegex,
    testSuffix
  );
  testSuffixes.push(testSuffix);

  const inputMeta = {
    queueUrl,
  };

  workflowExecution = await buildAndExecuteWorkflow(
    config.stackName,
    config.bucket,
    workflowName,
    collection,
    provider,
    inputPayload,
    inputMeta
  );

  queueGranulesExecutionArns.push(workflowExecution.executionArn);
  totalInputPayloads.push(inputPayload);

  if (workflowExecution.status === 'completed') {
    console.log(greenConsoleLog(), `\n___ Execution of Workflow ${nthWorkflow} completed with success status ___`);
  } else {
    console.log(redConsoleLog(), `\n___ Execution of Workflow ${nthWorkflow} Failed ___\n ${JSON.stringify(workflowExecution)}\n`);
  }

  const lambdaOutput = await new LambdaStep().getStepOutput(
    workflowExecution.executionArn,
    'QueueGranules'
  );
  queueGranulesChildExecutionArns.push(lambdaOutput.payload);

  if (lambdaOutput.payload.running.length === granuleCountPerWorkflow) {
    colorConsoleLog = greenConsoleLog();
  } else {
    colorConsoleLog = redConsoleLog();
    console.log(colorConsoleLog, '\n___ lambdaOutputPayload ExecutionArns ___');
    lambdaOutput.payload.running.map((runningArn) =>
      console.log(`${JSON.stringify(runningArn)}`));
  }
  console.log(colorConsoleLog,
    `\n___ Lambda Output of Workflow ${nthWorkflow} has ${lambdaOutput.payload.running.length}/${granuleCountPerWorkflow} of expected arns ___`);

  const queuedGranules = [];
  const expectedValues = ['queued'];

  await Promise.all(
    inputPayload.granules.map(async (granule) => {
      const record = await waitForApiStatus(
        getGranule,
        {
          prefix: config.stackName,
          granuleId: granule.granuleId,
        },
        expectedValues
      );
      queuedGranules.push(record);
      totalGranulesCompleted.push(record);
    })
  );

  console.log(greenConsoleLog(),
    `\n___ ${queuedGranules.length}/${inputPayload.granules.length} Granules ingested by workflow ${nthWorkflow} are set to queued status ___`);
};

describe('The Granule Ingest Load Test ', () => {
  beforeAll(async () => {
    if (!Number.isFinite(Number(granuleCountPerWorkflow)) || granuleCountPerWorkflow > 450) {
      beforeAllFailed = `===== beforeAll() - Invalid input for number of granules per Workflow detected - ${granuleCountPerWorkflow} =====`;
      throw new Error(beforeAllFailed);
    } else {
      try {
        config = await loadConfig();
        const QueueName = randomString();
        const { QueueUrl } = await sqs().createQueue({ QueueName }).promise();
        queueUrl = QueueUrl;

        process.env.GranulesTable = `${config.stackName}-GranulesTable`;
        process.env.ExecutionsTable = `${config.stackName}-ExecutionsTable`;
        process.env.CollectionsTable = `${config.stackName}-CollectionsTable`;

        await pMap(
          new Array(totalWorkflowCount).fill().map((_, index) => index + 1),
          async (index) => {
            await batchGranulesProcessing(index);
          },
          { concurrency: 8 }
        );
      } catch (error) {
        beforeAllFailed = `===== beforeAll() failed =====\n ${error}`;
        throw new Error(beforeAllFailed);
      }
    }
  });

  /* afterAll(async () => {
    // clean up stack state added by test
    console.log(blueConsoleLog(), `\n===== Delete QueueUrl =====\n ${JSON.stringify(queueUrl)}\n`);
    await sqs().deleteQueue({
      QueueUrl: queueUrl,
    }).promise();

    await Promise.all(
      totalInputPayloads.map(async (inPayload) =>
        await cleanupLoadTestGranules(config.stackName, inPayload.granules))
    );

    console.log(blueConsoleLog(), '\n===== Delete queueGranules ExecutionArns =====');
    await Promise.all(
      queueGranulesExecutionArns.map(async (qGranulesExecutionArn) => {
        console.log(`${JSON.stringify(qGranulesExecutionArn)}`);
        await deleteExecution({
          prefix: config.stackName,
          executionArn: qGranulesExecutionArn,
        });
      })
    );

    await Promise.all(
      testSuffixes.map(async (testSuffix) => {
        await cleanupCollections(
          config.stackName,
          config.bucket,
          collectionsDir,
          testSuffix
        );
        cleanupProviders(
          config.stackName,
          config.bucket,
          providersDir,
          testSuffix
        );
      })
    );
  }); */

  it('writes to database the expected number of granules with status queued', () => {
    const expectedGranuleCount = granuleCountPerWorkflow * totalWorkflowCount;
    expect(expectedGranuleCount * granuleCountThreshold < totalGranulesCompleted.length && totalGranulesCompleted.length <= expectedGranuleCount).toBeTruthy();
    console.log(colorConsoleLog, `\n*** The total ingested Granules = ${totalGranulesCompleted.length}/${expectedGranuleCount} ***`);
  });
});
