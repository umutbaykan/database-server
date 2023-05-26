// Initiate the app and specify port

const app = require('./server.js')
const port = 4000;

console.log(`Server listening on localhost:${port}`);
app.listen(port);
