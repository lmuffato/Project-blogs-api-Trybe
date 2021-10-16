const { Router } = require('express');
const userValidator = require('../validations/UserValidator');
const authentication = require('../middlewares/Authentication');
const loginValidator = require('../validations/LoginValidator');
const UserController = require('../controller/UserController');

const route = Router();

route.get('/user', authentication, UserController.create);
route.post('/user', userValidator, UserController.create);
route.post('/login', loginValidator, UserController.login);

module.exports = route;