const express = require('express');
const rescue = require('express-rescue');
const validateUserFields = require('../middlewares/validateUserFields');
const controllers = require('../controllers');

const userRouter = express.Router();

userRouter.post('/', validateUserFields, rescue(controllers.createUser));

module.exports = userRouter;