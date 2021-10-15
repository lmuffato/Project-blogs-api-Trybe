const express = require('express');
const userController = require('../controllers/userController');

const {
  emailFormatValidation,
  emailValidation,
  displayNameValidation,
  passwordValidation,
} = require('../middlewares/inputValidatios');

const router = express.Router();

router.post('/', emailFormatValidation, emailValidation, 
  displayNameValidation, passwordValidation, userController.create);

module.exports = router;