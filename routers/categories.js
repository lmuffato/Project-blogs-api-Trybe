const express = require('express');

const { userAuthentication } = require('../controllers/login');

const router = express.Router();

router.post('/', userAuthentication);

router.get('/', userAuthentication);

module.exports = router;