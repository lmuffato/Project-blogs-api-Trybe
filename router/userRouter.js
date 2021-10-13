const express = require('express');
const userController = require('../controller/userController');
const { validateUser,
  verifyIfAlreadyExists, verifyExistById,
} = require('../middlewares/userValidate');
const { existsToken, verifyToken } = require('../middlewares/jwtValidate');

const tokenValidation = [existsToken, verifyToken];

const userRouter = express.Router();

userRouter.post('/', validateUser, verifyIfAlreadyExists, userController.create);

userRouter.get('/', ...tokenValidation, userController.getAll);

userRouter.get('/:id', ...tokenValidation, verifyExistById, userController.getById);

module.exports = userRouter;
