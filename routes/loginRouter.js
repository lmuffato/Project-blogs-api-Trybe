const express = require('express');
const LoginController = require('../controllers/LoginController');
const {
  validateEmailLogin,
  validatePasswordLogin,
} = require('../middlewares/LoginMiddleware');

const route = express.Router();

route.post('/', validateEmailLogin, validatePasswordLogin, LoginController.Login);

module.exports = route;