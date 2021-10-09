const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.post('/', userController.create);

module.exports = userRouter;
