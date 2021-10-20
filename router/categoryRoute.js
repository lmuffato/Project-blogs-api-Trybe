const express = require('express');

const CategoryController = require('../controller/categoryController');

const { validCategoryName } = require('../middlewares/categoryValidation');
const { authValidation } = require('../middlewares/authValidation');

const router = express.Router();

router.post('/', validCategoryName, authValidation, CategoryController.createCategories);

module.exports = router;