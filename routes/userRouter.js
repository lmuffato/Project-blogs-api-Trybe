const express = require('express');
const userController = require('../controllers/UserController');
const {
  validateEmail,
  validateName,
  validatePassword,
  validateToken,
  validateUserExists,
} = require('../middlewares/UserMiddleware');

const route = express.Router();

route.post('/', validateName, validateEmail, validatePassword, userController.createUser);
route.get('/', validateToken, userController.findUsers);
route.get('/:id', validateUserExists, validateToken, userController.findById);

module.exports = route;