const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.listen(port);
console.log('The server is listening on port 3000');