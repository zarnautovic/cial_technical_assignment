const express = require('express');
const router = express.Router();

const { getFromFile } = require('../bll/history');

router.get('/history', async (req, res, next) => {
    try {
      const result  = await getFromFile();
      res.json(result);
    } catch (error) {
      next(error);
    }
});

module.exports = router;