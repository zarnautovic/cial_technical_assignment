var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'This is API for Cial Technical Assignment!'});
});

module.exports = router;