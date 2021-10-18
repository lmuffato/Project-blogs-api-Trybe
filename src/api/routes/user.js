const express = require('express');
const { createUser } = require('../../controllers/User');
const validateOnCreate = require('../../middlewares/validateOnCreate');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validate = require('../../schemas/validate');

const userRouter = express.Router();

userRouter
  .route('/')
  .post(
    validate.createUser(),
    fieldsValidation,
    validateOnCreate,
    createUser,
  );

module.exports = userRouter;
