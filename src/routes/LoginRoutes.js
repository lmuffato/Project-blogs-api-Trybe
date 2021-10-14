const express = require('express');
const rescue = require('express-rescue');
const LoginControllers = require('../controllers/login');

const route = express.Router();

route.post('/', rescue(LoginControllers.auth));

module.exports = route;