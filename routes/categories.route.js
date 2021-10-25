const { Router } = require('express');
const { isAuth } = require('../middlewares/auth');
const { categoryRequired } = require('../validations/category.validation');
const { listCategories, createCategory } = require('../controllers/category.controller');

const router = Router();

router.get('/categories', isAuth, listCategories);
router.post('/categories', categoryRequired, isAuth, createCategory);

module.exports = router;