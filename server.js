const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('a world');
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
