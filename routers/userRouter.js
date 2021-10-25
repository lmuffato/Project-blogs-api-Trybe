const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.post('/', rescue(userController.addUser));
userRouter.get('/:id', rescue(userController.getUserById));
userRouter.get('/', rescue(userController.getUsers));

module.exports = userRouter;
