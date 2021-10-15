const router = require('express').Router();
const categoriesController = require('../controllers/categories');

// CREATE
router.post('/', categoriesController.createCategory);

// READ
router.get('/', categoriesController.getCategories);

module.exports = router;
