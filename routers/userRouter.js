const express = require('express');

const router = express.Router();

const { tokenValidation } = require('../token/tokenValidation');
const { createUser, findAllUsers, findUserById } = require('../controllers/userController');
const { validationUser } = require('../validations/userValidation');
const { userIdValidation } = require('../validations/userIdValidation');

router.post('/', validationUser, createUser);

router.get('/', 
  tokenValidation, 
  findAllUsers);  

router.get('/:id', 
  tokenValidation, 
  userIdValidation, 
  findUserById);

module.exports = router;
