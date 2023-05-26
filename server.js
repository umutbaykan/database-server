const express = require('express');
const app = express();

const getRouter = require('./routes/get')
const setRouter = require('./routes/set')

app.use('/get', getRouter)
app.use('/set', setRouter)

module.exports = app;
