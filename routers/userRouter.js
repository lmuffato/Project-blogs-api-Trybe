const express = require('express');
const rescue = require('express-rescue');

const userController = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.post('/', rescue(userController.addUser));

module.exports = userRouter;
