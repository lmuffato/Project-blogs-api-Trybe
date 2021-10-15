const express = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../auth/tokenValidation');

const {
  emailFormatValidation,
  emailValidation,
  displayNameValidation,
  passwordValidation,
} = require('../middlewares/inputValidatios');

const router = express.Router();

router.post('/', emailValidation, emailFormatValidation, 
  displayNameValidation, passwordValidation, userController.create);

router.get('/', validateToken, userController.getAllUsers);

router.get('/:id', validateToken, userController.getUserByID);

module.exports = router;