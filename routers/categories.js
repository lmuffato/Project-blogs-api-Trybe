const express = require('express');

const { userAuthentication } = require('../controllers/login');

const { create, getAll } = require('../controllers/categories');

const router = express.Router();

router.post('/', userAuthentication, create);

router.get('/', userAuthentication, getAll);

module.exports = router;