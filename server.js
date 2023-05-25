const express = require('express');
const app = express();

let database;
if (require.main === module || process.argv[1].endsWith('launch.js')) {
  database = require('./store');
} else {
  database = require('./store_test');
}

app.get('/get', (req, res) => {
  const response = database[req.query.key];
  if (response === undefined) {
    res.status(404).send('Invalid request');
  } else {
    res.send(response);
  }
});

app.post('/set', (req, res) => {
  const userKey = Object.keys(req.query)[0];
  const value = req.query[userKey];
  database[userKey] = value;
  res.send('ok!');
});

module.exports = app;
