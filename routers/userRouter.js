const express = require('express');
const rescue = require('express-rescue');
const validateUserFields = require('../middlewares/validateUserFields');
const auth = require('../middlewares/auth');
const controllers = require('../controllers');

const userRouter = express.Router();

userRouter.post('/', validateUserFields, rescue(controllers.createUser));
userRouter.get('/', auth, rescue(controllers.getUsers));
userRouter.get('/:id', auth, rescue(controllers.getUserById));

module.exports = userRouter;