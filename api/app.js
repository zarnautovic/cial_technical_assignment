const express = require('express');
const helmet = require('helmet');
const { getSearchResults } = require('./services/duckduckgo/duckduckgo');
const { getResponse } = require('./bll/response');

const app = express();
const port = 3000;

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cial Technical Assignment');
});

app.get('/search', async (req, res) => {
  try {
    const { searchParam } = req.query;
    const result = await getSearchResults(searchParam);
    const response = getResponse(result);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.post('/search', async (req, res) => {
  try {
    console.log(req.body);
    const { searchParam } = req.body;
    const result = await getSearchResults(searchParam);
    const response = getResponse(result);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);
console.log('The server is listening on port 3000');