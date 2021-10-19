const express = require('express');

const { 
  validEmail, 
  validDisplayName, 
  validPassword, 
  resgisteredEmail, 
} = require('../middlewares/userValidation');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/', 
validDisplayName,
validEmail, 
validPassword, 
resgisteredEmail,
userController.createNewUser);

module.exports = router;