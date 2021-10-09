const express = require('express');

const router = express.Router();

const {
  CreateCategoryController,
  GetCategoriesController,
} = require('../controllers/categories');

const authToken = require('../middlewares/authToken');
const authCategory = require('../middlewares/category/authCategory');

router.post('/', authToken, authCategory, CreateCategoryController.handle);

router.get('/', authToken, GetCategoriesController.handle);

module.exports = router;
