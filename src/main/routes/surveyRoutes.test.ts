import request from 'supertest';
import { Collection } from 'mongodb';

import app from '../config/app';
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongoHelper';

let surveyCollection: Collection;

describe('Surveys Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys');
    await surveyCollection.deleteMany({});
  });


  describe('POST /surveys', () => {
    test('Should return 200 on add survey', async () => {
      await request(app)
        .post('/api/surveys')
        .send({
          question: 'Question',
          answers: [
            {
              answer: 'Answer 1',
              image: 'http://image-name.com',
            },
            {
              answer: 'Answer 2',
            },
          ],
        })
        .expect(200);
    });
  });
});
