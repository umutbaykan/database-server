const request = require('supertest');
const app = require('../server');

describe('GET /get', () => {
  test('should return the value passed in the key parameter', async () => {
    const key = 'testkey';
    const response = await request(app).get(`/get?key=${key}`);
    expect(response.status).toBe(200);
    expect(response.text).toEqual('testvalue');
  });

  test('should return invalid request with a status code of 404 if no key exists', async () => {
    const key = 'noKey';
    const response = await request(app).get(`/get?key=${key}`);
    expect(response.status).toBe(404);
    expect(response.text).toEqual('Invalid request');
  });
});