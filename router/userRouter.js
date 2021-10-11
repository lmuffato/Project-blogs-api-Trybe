const express = require('express');
const userController = require('../controller/userController');
const { validateUser, verifyIfAlreadyExists } = require('../middlewares/userValidate');
const { existsToken, verifyToken } = require('../middlewares/jwtValidate');

const userRouter = express.Router();

userRouter.post('/', validateUser, verifyIfAlreadyExists, userController.create);

userRouter.get('/', existsToken, verifyToken, userController.getAll);

module.exports = userRouter;
