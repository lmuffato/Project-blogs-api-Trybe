const express = require('express');

const router = express.Router();

const { tokenValidation } = require('../token/tokenValidation');
const { createUser, findAllUsers } = require('../controllers/userController');
const { validationUser } = require('../validations/userValidation');

router.post('/', validationUser, createUser);

router.get('/', 
  tokenValidation, 
  findAllUsers);  

module.exports = router;
