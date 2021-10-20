const express = require('express');
const { createUser, getAllUsers } = require('../../controllers/User');
const validateOnCreate = require('../../middlewares/validateOnCreate');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validate = require('../../schemas/validate');
const auth = require('../../middlewares/auth');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(auth, getAllUsers)
  .post(
    validate.createUser(),
    fieldsValidation,
    validateOnCreate,
    createUser,
  );

module.exports = userRouter;
