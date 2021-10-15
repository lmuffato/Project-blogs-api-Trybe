const { Router } = require('express');
const userValidator = require('../validations/UserValidator');
const UserController = require('../controller/UserController');

const route = Router();

route.post('/user', userValidator, UserController.create);

module.exports = route;