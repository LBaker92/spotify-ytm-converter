const express = require('express');
const router = express.Router();

router.use('/authorize', require('./authorize'));
router.use('/refresh', require('./refresh'));

module.exports = router;