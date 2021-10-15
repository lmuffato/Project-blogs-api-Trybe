const express = require('express');

const validations = require('../middlewares/validations');
const loginController = require('../controllers/login');

const router = express.Router();

router.post('/',
  validations.validateEmailIsNotEmpty,
  validations.validatePasswordNotEmpty,
  validations.validateEmailLogin,
  validations.validatePasswordRequired,
  loginController);

module.exports = router;
