const express = require('express');

const router = express.Router();

const { tokenValidation } = require('../token/tokenValidation');
const { categoryValidation } = require('../validations/categoryValidation');
const { createCategory } = require('../controllers/categoryController');

router.post('/', 
  categoryValidation, 
  tokenValidation, 
  createCategory);

module.exports = router;