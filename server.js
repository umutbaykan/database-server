const express = require('express');
const app = express();

app.get('/get', (req, res) => {
  res.send(req.query.key);
});

module.exports = app;
