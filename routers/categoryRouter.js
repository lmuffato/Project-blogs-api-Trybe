const express = require('express');

const router = express.Router();

const { tokenValidation } = require('../token/tokenValidation');
const { categoryValidation } = require('../validations/categoryValidation');
const { createCategory, findAllCategories } = require('../controllers/categoryController');

router.post('/', categoryValidation, tokenValidation, createCategory);

router.get('/', tokenValidation, findAllCategories);

module.exports = router;