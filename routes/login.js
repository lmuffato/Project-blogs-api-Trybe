const express = require('express');
const { access } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/login',
  middlewares.login.loginValidate,
  access);

module.exports = router;
