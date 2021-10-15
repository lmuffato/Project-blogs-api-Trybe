const express = require('express');

const validations = require('../middlewares/validations');

const userController = require('../controllers/user');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', 
  validations.validateDisplayName,
  validations.validateEmailRequired,
  validations.validateEmailFormat,
  validations.validatePasswordRequired,
  validations.validatePassword,
  userController.create);

router.get('/', [validateToken, userController.getAll]);

module.exports = router;