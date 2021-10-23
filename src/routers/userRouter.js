const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', rescue(userController.addUser));
userRouter.get('/', rescue(userController.getUsers));

module.exports = userRouter;