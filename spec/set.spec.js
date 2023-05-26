const request = require('supertest');
const app = require('../server');

describe('POST /set', () => {
  test('should set the value of a key to the value', async () => {
    const key = 'somekey';
    const value = 'somevalue';
    await request(app).post(`/set?${key}=${value}`);
    const response = await request(app).get(`/get?key=${key}`);
    expect(response.status).toBe(200);
    expect(response.text).toEqual(value);
  });

  test('can change the value of an existing key to something else', async () => {
    const key = 'testkey';
    const initialResponse = await request(app).get(`/get?key=${key}`);
    expect(initialResponse.text).toBe('testvalue');
    const value = 'new';
    await request(app).post(`/set?${key}=${value}`);
    const response = await request(app).get(`/get?key=${key}`);
    expect(response.status).toBe(200);
    expect(response.text).toEqual(value);
  });
});