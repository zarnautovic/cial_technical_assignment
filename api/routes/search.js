const express = require('express');
const router = express.Router();

const { getSearchResults } = require('../services/duckduckgo/duckduckgo');
const { formatReponse } = require('../bll/formatResponse');
const { validateSearchParam } = require('../bll/validation');
const { ErrorHandler } = require('../helpers/error');
const { saveToFile } = require('../bll/history');


router.get('/search', async (req, res, next) => {
    try {
      const { searchParam } = req.query;
      validateSearchParam(searchParam);
      const result = await getSearchResults(searchParam);
      await saveToFile(searchParam);
      const response = formatReponse(result);
      res.json(response);
    } catch (error) {
      next(error);
    }
});

router.post('/search', async (req, res, next) => {
    try {
      const { searchParam } = req.body;
      validateSearchParam(searchParam);
      const result = await getSearchResults(searchParam);
      const response = formatReponse(result);
      res.json(response);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;