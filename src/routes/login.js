const express = require('express');
const rescue = require('express-rescue');
const { loginControllers } = require('../controllers');
const { middlewaresLogin } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresLogin.validateLogin, rescue(loginControllers.loginUser));

module.exports = router;
