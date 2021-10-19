const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/ping', controller.user);

module.exports = router;
