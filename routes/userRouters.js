const express = require('express');
const rescue = require('express-rescue');

const userRouter = express.Router();

const users = require('../controllers/userControllers');
const userValidation = require('../middlewares/userValidation');

userRouter.post('/', userValidation, rescue(users.createUser));

module.exports = userRouter;