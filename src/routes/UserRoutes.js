const express = require('express');
const UserController = require('../database/controllers/UserController');

const route = express.Router();

route.post('/', UserController.createUser);

module.exports = route;