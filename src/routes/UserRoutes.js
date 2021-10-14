const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddleware');

const route = express.Router();

route.post('/', rescue(UserController.createUser));
route.get('/', authMiddleware, rescue(UserController.findAllUsers));

module.exports = route;
