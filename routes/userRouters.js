const express = require('express');
const rescue = require('express-rescue');

const userRouter = express.Router();

const users = require('../controllers/userControllers');
const userValidation = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenValidation');

userRouter.post('/', userValidation, rescue(users.createUser));
userRouter.get('/', tokenValidation, rescue(users.getAllUsers));
userRouter.get('/:id', tokenValidation, rescue(users.getById));

module.exports = userRouter;