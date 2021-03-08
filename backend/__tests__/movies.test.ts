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
      id: [
        'tat3799232',
        'tt5463162',
        'tt3778644',
        'tt7784604',
        'tt5834262',
        'tt4881806',
        'tt5164214',
        'tt0317705',
      ],
    };
    const result = await request(app).post('/').send(payload);
    expect(result.status).toEqual(404);
  });

  it('Post / - Post votation movies using 6 ids movies', async () => {
    const payload = {
      id: [
        'tt3799232',
        'tt5463162',
        'tt3778644',
        'tt7784604',
        'tt5834262',
        'tt4881806',
      ],
    };
    const result = await request(app).post('/').send(payload);
    expect(result.status).toEqual(400);
  });

  it('Post / - Post votation without id ', async () => {
    const payload = { asd: [] };
    const result = await request(app).post('/').send(payload);
    expect(result.status).toEqual(422);
  });
});
