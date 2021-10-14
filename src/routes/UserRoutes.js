const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');

const route = express.Router();

route.post('/', rescue(UserController.createUser));

module.exports = route;
