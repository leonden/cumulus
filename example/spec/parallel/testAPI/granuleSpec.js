'use strict';

const { s3PutObject } = require('@cumulus/aws-client/S3');
const { createCollection } = require('@cumulus/integration-tests/Collections');
const { constructCollectionId } = require('@cumulus/message/Collections');
const {
  buildRandomizedGranule,
} = require('@cumulus/integration-tests/Granules');
const { deleteCollection } = require('@cumulus/api-client/collections');
const {
  createGranule,
  deleteGranule,
} = require('@cumulus/api-client/granules');
const { randomId } = require('@cumulus/common/test-utils');
const { loadConfig } = require('../../helpers/testUtils');

describe('The Granules API', () => {
  let beforeAllFailed = false;
  let config;
  let collection;
  let collectionId;
  let granuleId;
  let prefix;
  let granuleFile;

  beforeAll(async () => {
    try {
      config = await loadConfig();
      prefix = config.stackName;

      collection = await createCollection(prefix);
      collectionId = constructCollectionId(collection.name, collection.version);

      granuleFile = {
        bucket: config.buckets.public.name,
        key: randomId('key'),
      };
      await s3PutObject({
        Bucket: granuleFile.bucket,
        Key: granuleFile.key,
        Body: 'testfile',
      });
    } catch (error) {
      beforeAllFailed = true;
      console.log(error);
    }
  });

  afterAll(async () => {
    await deleteGranule({ prefix, granuleId });
    await deleteCollection({
      prefix,
      collectionName: collection.name,
      collectionVersion: collection.version,
    });
  });

  describe('the Granule Api', () => {
    it('creates a granule.', async () => {
      if (beforeAllFailed) {
        fail('beforeAll() failed');
      } else {
        const randomGranuleRecord = buildRandomizedGranule({
          collectionId,
          files: [granuleFile],
        });
        granuleId = randomGranuleRecord.granuleId;
        const response = await createGranule({
          prefix,
          body: randomGranuleRecord,
        });

        expect(response.statusCode).toBe(200);
        const { result } = JSON.parse(response.body);
        expect(result).toBe(`Wrote Granule ${granuleId}`);
      }
    });

    it('Errors creating a bad granule.', async () => {
      const name = randomId('name');
      const version = randomId('version');
      const randomGranuleRecord = buildRandomizedGranule({
        collectionId: constructCollectionId(name, version),
      });
      try {
        await createGranule({
          prefix,
          body: randomGranuleRecord,
        });
      } catch (error) {
        const apiError = JSON.parse(error.apiMessage);
        expect(apiError.statusCode).toBe(400);
        expect(apiError.error).toBe('Bad Request');
        expect(apiError.message).toContain('RecordDoesNotExist');
        expect(apiError.message).toContain(name);
        expect(apiError.message).toContain(version);
      }
    });
  });
});