const express = require('express');

const {
  emailFormatValidation,
  emailValidation,
  displayNameValidation,
  passwordValidation,
} = require('../middlewares/inputValidatios');

const router = express.Router();

router.post('/', emailFormatValidation, emailValidation, displayNameValidation, passwordValidation);

module.exports = router;