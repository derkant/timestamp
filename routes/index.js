const express = require('express');
const timeService = require('./time');

const router = express.Router();

router.use('/api', timeService);



module.exports = router;