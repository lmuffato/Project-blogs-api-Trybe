const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers/userController');
const { validationUser } = require('../validations/userValidation');

router.post('/', 
  validationUser,
  createUser);

module.exports = router;
