const express = require('express');

const { 
  validEmail, 
  validDisplayName, 
  validPassword, 
  resgisteredEmail, 
} = require('../middlewares/userValidation');
const { authValidation } = require('../middlewares/authValidation');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/', 
validDisplayName,
validEmail, 
validPassword, 
resgisteredEmail,
userController.createNewUser);
router.get('/', authValidation, userController.getAllUsers);

module.exports = router;