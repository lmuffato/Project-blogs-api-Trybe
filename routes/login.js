const express = require('express');

const validations = require('../middlewares/validations');
const loginController = require('../controllers/login');

const router = express.Router();

router.post('/',
  validations.validateEmailLogin,
  validations.validatePasswordRequired,
  validations.validateEmailIsNotEmpty,
  validations.validatePasswordNotEmpty,
  loginController);

module.exports = router;
