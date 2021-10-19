const express = require('express');
const userValidator = require('../validations/UserValidator');
const loginValidator = require('../validations/LoginValidator');
const UserController = require('../controller/UserController');

const route = express.Router();

route.post('/user', userValidator, UserController.create);
route.post('/login', loginValidator, UserController.login);

module.exports = route;