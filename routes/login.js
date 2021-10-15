const express = require('express');
const loginController = require('../controllers/loginController');

const {
  passwordValidation,
  emailLoginValidation,
  passwordLoginValidation,
} = require('../middlewares/inputValidatios');

const router = express.Router();

router.post('/', emailLoginValidation, passwordLoginValidation, passwordValidation, 
  loginController);

module.exports = router;