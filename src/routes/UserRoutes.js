const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddleware');

const route = express.Router();

route.post('/', rescue(UserController.createUser));
route.get('/', authMiddleware, rescue(UserController.findAllUsers));
route.get('/:id', authMiddleware, rescue(UserController.findByPk));
route.delete('/me', authMiddleware, rescue(UserController.removeUser));

module.exports = route;
