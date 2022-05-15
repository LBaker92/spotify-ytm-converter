const express = require('express');
const router = express.Router();

router.use('/authorize', require('./authorize'));
router.use('/refresh', require('./refresh'));
router.use('/me', require('./me'));

module.exports = router;