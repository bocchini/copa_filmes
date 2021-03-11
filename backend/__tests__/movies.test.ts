import jest from 'jest';
import request from 'supertest';

import app from '../src/app';

describe('Return all movies', () => {
  it('Get / - Return all movies from API', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBeTruthy();
  });

  it('Post / - Post votation movies post wrong', async () => {
    const payload = {
      id: ['8', '9', '6', '4', '12', '14', '15', '16'],
    };
    const result = await request(app).post('/votation').send(payload);
    expect(result.status).toEqual(404);
  });

  it('Post / - Post votation movies using 6 ids movies', async () => {
    const payload = {
      id: ['2', '1', '9', '4', '6', '5'],
    };
    const result = await request(app).post('/votation').send(payload);
    expect(result.status).toEqual(400);
  });

  it('Post / - Post votation without id ', async () => {
    const payload = { asd: [] };
    const result = await request(app).post('/votation').send(payload);
    expect(result.status).toEqual(422);
  });
});
