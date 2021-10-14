const express = require('express');
const userController = require('../controllers/UserController');
const {
  validateEmail,
  validateName,
  validatePassword,
  validateToken,
} = require('../middlewares/UserMiddleware');

const route = express.Router();

route.post('/', validateName, validateEmail, validatePassword, userController.createUser);
route.get('/', validateToken, userController.findUsers);

module.exports = route;