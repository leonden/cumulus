'use strict';

const test = require('ava');
const sinon = require('sinon');
const request = require('supertest');

const awsServices = require('@cumulus/aws-client/services');
const {
  recursivelyDeleteS3Bucket,
} = require('@cumulus/aws-client/S3');
const { randomString } = require('@cumulus/common/test-utils');
const {
  localStackConnectionEnv,
  generateLocalTestDb,
  destroyLocalTestDb,
  CollectionPgModel,
} = require('@cumulus/db');
const {
  constructCollectionId,
} = require('@cumulus/message/Collections');
const EsCollection = require('@cumulus/es-client/collections');
const {
  createTestIndex,
  cleanupTestIndex,
} = require('@cumulus/es-client/testUtils');

const { migrationDir } = require('../../../../../lambdas/db-migration');

const AccessToken = require('../../../models/access-tokens');
const Collection = require('../../../models/collections');
const RulesModel = require('../../../models/rules');
const {
  createFakeJwtAuthToken,
  fakeCollectionFactory,
  setAuthorizedOAuthUsers,
} = require('../../../lib/testUtils');

const assertions = require('../../../lib/assertions');
const { post } = require('../../../endpoints/collections');
const { buildFakeExpressResponse } = require('../utils');

process.env.AccessTokensTable = randomString();
process.env.CollectionsTable = randomString();
process.env.RulesTable = randomString();
process.env.UsersTable = randomString();
process.env.stackName = randomString();
process.env.system_bucket = randomString();
process.env.TOKEN_SECRET = randomString();

// import the express app after setting the env variables
const { app } = require('../../../app');

let jwtAuthToken;
let accessTokenModel;
let collectionModel;
let rulesModel;
let publishStub;

const testDbName = randomString(12);

test.before(async (t) => {
  process.env = {
    ...process.env,
    ...localStackConnectionEnv,
    PG_DATABASE: testDbName,
  };

  const { knex, knexAdmin } = await generateLocalTestDb(testDbName, migrationDir);
  t.context.testKnex = knex;
  t.context.testKnexAdmin = knexAdmin;

  t.context.collectionPgModel = new CollectionPgModel();

  const { esIndex, esClient } = await createTestIndex();
  t.context.esIndex = esIndex;
  t.context.esClient = esClient;
  t.context.esCollectionClient = new EsCollection(
    {},
    undefined,
    t.context.esIndex
  );

  await awsServices.s3().createBucket({ Bucket: process.env.system_bucket }).promise();

  collectionModel = new Collection({ tableName: process.env.CollectionsTable });
  await collectionModel.createTable();

  const username = randomString();
  await setAuthorizedOAuthUsers([username]);

  accessTokenModel = new AccessToken();
  await accessTokenModel.createTable();

  rulesModel = new RulesModel();
  await rulesModel.createTable();

  jwtAuthToken = await createFakeJwtAuthToken({ accessTokenModel, username });

  process.env.collection_sns_topic_arn = randomString();
  publishStub = sinon.stub(awsServices.sns(), 'publish').returns({
    promise: () => Promise.resolve(true),
  });
});

test.after.always(async (t) => {
  await accessTokenModel.deleteTable();
  await collectionModel.deleteTable();
  await rulesModel.deleteTable();
  await recursivelyDeleteS3Bucket(process.env.system_bucket);
  await cleanupTestIndex(t.context);
  publishStub.restore();
  await destroyLocalTestDb({
    knex: t.context.testKnex,
    knexAdmin: t.context.testKnexAdmin,
    testDbName,
  });
});

test('CUMULUS-911 POST without an Authorization header returns an Authorization Missing response', async (t) => {
  const newCollection = fakeCollectionFactory();
  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .expect(401);
  assertions.isAuthorizationMissingResponse(t, res);
});

test('CUMULUS-912 POST with an invalid access token returns an unauthorized response', async (t) => {
  const newCollection = fakeCollectionFactory();
  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ThisIsAnInvalidAuthorizationToken')
    .expect(401);
  assertions.isInvalidAccessTokenResponse(t, res);
});

test.todo('CUMULUS-912 POST with an unauthorized user returns an unauthorized response');

test('POST with invalid authorization scheme returns an invalid token response', async (t) => {
  const newCollection = fakeCollectionFactory();
  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', 'InvalidBearerScheme ThisIsAnInvalidAuthorizationToken')
    .expect(401);
  assertions.isInvalidAuthorizationResponse(t, res);
});

test('POST creates a new collection in all data stores', async (t) => {
  const newCollection = fakeCollectionFactory();

  await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(200);

  const fetchedDynamoRecord = await collectionModel.get({
    name: newCollection.name,
    version: newCollection.version,
  });

  t.is(fetchedDynamoRecord.name, newCollection.name);
  t.is(fetchedDynamoRecord.version, newCollection.version);

  const esRecord = await t.context.esCollectionClient.get(
    constructCollectionId(newCollection.name, newCollection.version)
  );
  t.like(esRecord, fetchedDynamoRecord);

  t.true(await t.context.collectionPgModel.exists(
    t.context.testKnex,
    {
      name: newCollection.name,
      version: newCollection.version,
    }
  ));
});

test('POST creates a new collection in all data stores with correct timestamps', async (t) => {
  const newCollection = fakeCollectionFactory();

  await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(200);

  const fetchedDynamoRecord = await collectionModel.get({
    name: newCollection.name,
    version: newCollection.version,
  });

  const collectionPgRecord = await t.context.collectionPgModel.get(
    t.context.testKnex,
    {
      name: newCollection.name,
      version: newCollection.version,
    }
  );

  const esRecord = await t.context.esCollectionClient.get(
    constructCollectionId(newCollection.name, newCollection.version)
  );

  t.true(fetchedDynamoRecord.createdAt > newCollection.createdAt);
  t.true(fetchedDynamoRecord.updatedAt > newCollection.updatedAt);

  // Records have the same timestamps
  t.is(collectionPgRecord.created_at.getTime(), fetchedDynamoRecord.createdAt);
  t.is(collectionPgRecord.updated_at.getTime(), fetchedDynamoRecord.updatedAt);
  t.is(collectionPgRecord.created_at.getTime(), esRecord.createdAt);
  t.is(collectionPgRecord.updated_at.getTime(), esRecord.updatedAt);
});

test('POST without a name returns a 400 error', async (t) => {
  const newCollection = fakeCollectionFactory();
  delete newCollection.name;

  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(400);

  const { message } = res.body;
  t.is(message, 'Field name and/or version is missing');
});

test('POST without a version returns a 400 error', async (t) => {
  const newCollection = fakeCollectionFactory();
  delete newCollection.version;

  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(400);

  const { message } = res.body;
  t.is(message, 'Field name and/or version is missing');
});

test('POST for an existing collection returns a 409', async (t) => {
  const newCollection = fakeCollectionFactory();

  await collectionModel.create(newCollection);

  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(409);
  t.is(res.status, 409);
  t.is(res.body.message, `A record already exists for ${newCollection.name} version: ${newCollection.version}`);
});

test('POST with non-matching granuleIdExtraction regex returns 400 bad request response', async (t) => {
  const newCollection = fakeCollectionFactory();

  newCollection.granuleIdExtraction = 'badregex';
  newCollection.sampleFileName = 'filename.txt';

  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(400);

  t.is(res.status, 400);
  t.is(res.body.message, 'granuleIdExtraction "badregex" cannot validate "filename.txt"');
});

test('POST with non-matching file.regex returns 400 bad request repsonse', async (t) => {
  const newCollection = fakeCollectionFactory();
  const filename = 'filename.txt';
  const regex = 'badregex';

  newCollection.files = [{
    regex,
    sampleFileName: filename,
    bucket: randomString(),
  }];

  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(400);

  t.is(res.status, 400);
  t.is(res.body.message, `regex "${regex}" cannot validate "${filename}"`);
});

test.serial('POST returns a 500 response if record creation throws unexpected error', async (t) => {
  const stub = sinon.stub(Collection.prototype, 'create')
    .callsFake(() => {
      throw new Error('unexpected error');
    });

  const newCollection = fakeCollectionFactory();

  try {
    const response = await request(app)
      .post('/collections')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${jwtAuthToken}`)
      .send(newCollection)
      .expect(500);
    t.is(response.status, 500);
  } finally {
    stub.restore();
  }
});

test('POST with invalid granuleIdExtraction regex returns 400 bad request', async (t) => {
  const newCollection = fakeCollectionFactory({
    granuleIdExtraction: '*',
  });

  const response = await request(app)
    .post('/collections')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .send(newCollection)
    .expect(400);
  t.is(response.status, 400);
  t.true(response.body.message.includes('Invalid granuleIdExtraction'));
});

test('POST with invalid file.regex returns 400 bad request', async (t) => {
  const newCollection = fakeCollectionFactory({
    files: [{
      bucket: 'test-bucket',
      regex: '*',
      sampleFileName: 'filename',
    }],
  });

  const response = await request(app)
    .post('/collections')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .send(newCollection)
    .expect(400);
  t.is(response.status, 400);
  t.true(response.body.message.includes('Invalid regex'));
});

test('POST with invalid granuleId regex returns 400 bad request', async (t) => {
  const newCollection = fakeCollectionFactory({
    granuleId: '*',
  });

  const response = await request(app)
    .post('/collections')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .send(newCollection)
    .expect(400);
  t.is(response.status, 400);
  t.true(response.body.message.includes('Invalid granuleId'));
});

test('POST with non-matching granuleId regex returns 400 bad request response', async (t) => {
  const newCollection = fakeCollectionFactory({
    granuleIdExtraction: '(filename)',
    sampleFileName: 'filename',
    granuleId: 'badregex',
  });

  const res = await request(app)
    .post('/collections')
    .send(newCollection)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${jwtAuthToken}`)
    .expect(400);

  t.is(res.status, 400);
  t.true(res.body.message.includes('granuleId "badregex" cannot validate "filename"'));
});

test('post() does not write to PostgreSQL/Elasticsearch if writing to Dynamo fails', async (t) => {
  const { testKnex } = t.context;

  const collection = fakeCollectionFactory();

  const fakeCollectionsModel = {
    exists: () => false,
    create: () => {
      throw new Error('something bad');
    },
    delete: () => true,
  };

  const expressRequest = {
    body: collection,
    testContext: {
      knex: testKnex,
      collectionsModel: fakeCollectionsModel,
    },
  };

  const response = buildFakeExpressResponse();

  await post(expressRequest, response);

  t.true(response.boom.badImplementation.calledWithMatch('something bad'));

  t.false(await t.context.esCollectionClient.exists(
    constructCollectionId(collection.name, collection.version)
  ));
  t.false(
    await t.context.collectionPgModel.exists(t.context.testKnex, {
      name: collection.name,
      version: collection.version,
    })
  );
});

test('post() does not write to Dynamo/Elasticsearch if writing to PostgreSQL fails', async (t) => {
  const collection = fakeCollectionFactory();

  const fakeCollectionPgModel = {
    create: () => Promise.reject(new Error('something bad')),
  };

  const expressRequest = {
    body: collection,
    testContext: {
      collectionPgModel: fakeCollectionPgModel,
    },
  };

  const response = buildFakeExpressResponse();

  await post(expressRequest, response);

  t.true(response.boom.badImplementation.calledWithMatch('something bad'));

  t.false(await t.context.esCollectionClient.exists(
    constructCollectionId(collection.name, collection.version)
  ));
  t.false(await collectionModel.exists(collection.name, collection.version));
});

test('post() does not write to Dynamo/PostgreSQL if writing to Elasticsearch fails', async (t) => {
  const collection = fakeCollectionFactory();

  const fakeEsClient = {
    index: () => Promise.reject(new Error('something bad')),
  };

  const expressRequest = {
    body: collection,
    testContext: {
      esClient: fakeEsClient,
    },
  };

  const response = buildFakeExpressResponse();

  await post(expressRequest, response);

  t.true(response.boom.badImplementation.calledWithMatch('something bad'));

  t.false(
    await t.context.collectionPgModel.exists(t.context.testKnex, {
      name: collection.name,
      version: collection.version,
    })
  );
  t.false(await collectionModel.exists(collection.name, collection.version));
});