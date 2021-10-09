const express = require('express');
const userController = require('../controller/userController');
const { validateUser } = require('../middlewares/userValidate');

const userRouter = express.Router();

userRouter.post('/', validateUser, userController.create);

module.exports = userRouter;
