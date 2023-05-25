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

describe('POST /set', () => {
  test.skip('should set the value of a key to the value', async () => {
    const key = 'somekey';
    const value = 'somevalue';
    await request(app)
    .post(`/set?${key}=${value}`)
    const response = await request(app).get(`/?key=${somekey}`)
    expect(response.status).toBe(200);
    expect(response).toEqual(value)
  })
})