const express = require('express');

const validations = require('../middlewares/validations');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/', 
  validations.validateDisplayName,
  validations.validateEmailRequired,
  validations.validateEmailFormat,
  validations.validatePasswordRequired,
  validations.validatePassword,
  userController.create);

module.exports = router;