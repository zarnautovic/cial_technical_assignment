var express = require('express');
var router = express.Router();

const { getSearchResults } = require('../services/duckduckgo/duckduckgo');
const { formatReponse } = require('../bll/formatResponse');

router.get('/search', async (req, res) => {
    try {
      const { searchParam } = req.query;
      const result = await getSearchResults(searchParam);
      const response = formatReponse(result);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
});

router.post('/search', async (req, res) => {
    try {
      const { searchParam } = req.body;
      const result = await getSearchResults(searchParam);
      const response = formatReponse(result);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = router;