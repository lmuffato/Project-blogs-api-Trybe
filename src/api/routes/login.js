const express = require('express');
const checkUserExists = require('../../middlewares/checkUserExists');
const validateUser = require('../../middlewares/validateUser');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validate = require('../../schemas/validate');
const { logIn } = require('../../controllers/Login');

const loginRouter = express.Router();

loginRouter
  .route('/')
  .post(
    validate.login(),
    fieldsValidation,
    checkUserExists,
    validateUser,
    logIn,
  );

module.exports = loginRouter;
