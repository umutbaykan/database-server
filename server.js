const express = require('express');
const app = express();
const port = 4000;

app.get('/get', (req, res) => {
  res.send(req.query.key);
});

console.log(`Server listening on localhost:${port}`);
// app.listen(port);

module.exports = app;
