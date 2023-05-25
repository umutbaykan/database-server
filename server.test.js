const request = require('supertest');
const app = require('./server');

describe('GET /get', () => {

  test('should return the value passed in the key parameter', async () => {
    const value = 'somevalue';
    const response = await request(app).get(`/get?key=${value}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(value);
  });
});
