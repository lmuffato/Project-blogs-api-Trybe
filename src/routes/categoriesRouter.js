const { Router } = require('express');

const { authToken } = require('../middlewares/authToken');
const categoriesController = require('../controllers/categoriesController');
const newCategoryValidation = require('../middlewares/newCategoryValidation');

const router = Router();

router.post('/', authToken, newCategoryValidation, categoriesController.createCategory);
router.get('/', authToken, categoriesController.findCategories);

module.exports = router;