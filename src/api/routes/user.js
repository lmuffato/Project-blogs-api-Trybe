const express = require('express');
const { createUser } = require('../../controllers/User');
const checkExistUser = require('../../middlewares/checkExistUser');
const validateOnCreate = require('../../middlewares/validateOnCreate');
const validate = require('../../schemas/validate');

const userRouter = express.Router();

userRouter.route('/').post(validate.createUser(), validateOnCreate, checkExistUser, createUser);

module.exports = userRouter;
