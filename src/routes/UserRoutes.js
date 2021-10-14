const express = require('express');
const rescue = require('express-rescue');
const UserControllers = require('../controllers/UserControllers');

const route = express.Router();

route.post('/', rescue(UserControllers.createUser));

module.exports = route;
