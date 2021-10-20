const express = require('express');

const { 
  validLoginEmail, 
  validLoginPassword, 
  validUser } = require('../middlewares/loginValidation');

const UserController = require('../controller/userController');

const router = express.Router();

router.post('/', 
validLoginEmail, 
validLoginPassword, 
validUser,
UserController.createLogin);

module.exports = router;