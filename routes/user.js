const express = require('express');

const validations = require('../middlewares/validations');

const userController = require();

const router = express.Router();

router.post('/', 
  validations.validateDisplayName,
  validations.validateEmailRequired,
  validations.validateEmailFormat,
  validations.validatePasswordRequired,
  validations.validatePassword,
);

module.exports = router;