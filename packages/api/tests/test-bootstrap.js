'use strict';

const test = require('ava');
const { randomString } = require('@cumulus/common/test-utils');
const { bootstrapDynamoDbTables } = require('../lambdas/bootstrap');
const models = require('../models');

const tableName = randomString();

test.before(async () => {
  // create collections table
  const r = await models.Manager.createTable(tableName, { name: 'someIndex', type: 'S' });
  console.log(r)
});

// Skipping this test for because LocalStack version 0.8.6 does not support pointInTime
test.skip.serial('bootstrap dynamoDb activates pointInTime on a given table', async (t) => {
  const resp = await bootstrapDynamoDbTables([{ name: tableName, pointInTime: true }]);

  t.is(
    resp.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus,
    'ENABLED'
  );
});

test.after.always(async () => {
  await models.Manager.deleteTable(tableName);
});
