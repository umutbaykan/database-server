const request = require('supertest');
const app = require('./server');

describe('app', () => {
  describe('GET /get', () => {
    test('should return the value passed in the key parameter', async () => {
      const value = 'testkey';
      const response = await request(app).get(`/get?key=${value}`);
      expect(response.status).toBe(200);
      expect(response.text).toBe('testvalue');
    });
  });

  describe('POST /set', () => {
    test('should set the value of a key to the value', async () => {
      const key = 'somekey';
      const value = 'somevalue';
      await request(app).post(`/set?${key}=${value}`);
      const response = await request(app).get(`/get?key=${key}`);
      expect(response.status).toBe(200);
      expect(response.text).toEqual(value);
    });
  });
});
