const express = require('express');
const userController = require('../controller/userController');
const { validateUser, verifyIfAlreadyExists } = require('../middlewares/userValidate');

const userRouter = express.Router();

userRouter.post('/', validateUser, verifyIfAlreadyExists, userController.create);

userRouter.get('/', userController.getAll);

module.exports = userRouter;
