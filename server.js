const express = require('express');
const app = express();

const getRouter = require('./routes/get')
const setRouter = require('./routes/set')

let database;
if (require.main === module || process.argv[1].endsWith('launch.js')) {
  database = require('./store');
} else {
  database = require('./store_test');
}

app.use('/get', getRouter)
app.use('/set', setRouter)

module.exports = app;
