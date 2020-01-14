var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'This is API forCial Technical Assignment!'});
});

module.exports = router;