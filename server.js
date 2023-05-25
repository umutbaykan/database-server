const express = require('express');
const app = express();

app.get('/get', (req, res) => {
  res.send(req.query.key);
});

app.post('/set', (req, res) => {
  const userKey = Object.keys(req.query)[0]
  const value = req.query[userKey]
  res.send(userKey + value);
});

module.exports = app;
