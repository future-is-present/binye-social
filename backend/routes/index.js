const express = require('express');
var router = express.Router();

router.use( '/', require('./all'));


module.exports = router;
