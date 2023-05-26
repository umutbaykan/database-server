const express = require('express');
const app = express();

const getRouter = require('./routes/get')

let database;
if (require.main === module || process.argv[1].endsWith('launch.js')) {
  database = require('./store');
} else {
  database = require('./store_test');
}

app.use('/get', getRouter)

app.post('/set', (req, res) => {
  const userKey = Object.keys(req.query)[0];
  const value = req.query[userKey];
  database[userKey] = value;
  res.send('ok!');
});

module.exports = app;
