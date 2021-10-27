const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', rescue(userController.addUser));
userRouter.get('/:id', rescue(userController.getUserById));
userRouter.get('/', rescue(userController.getUsers));
userRouter.delete('/me', rescue(userController.deleteUser));

module.exports = userRouter;