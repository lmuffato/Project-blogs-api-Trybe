const express = require('express');
const userController = require('../controllers/UserController');
const {
  validateEmail,
  validateName,
  validatePassword,
} = require('../middlewares/UserMiddleware');

const route = express.Router();

route.post('/', validateName, validateEmail, validatePassword, userController.createUser);

module.exports = route;