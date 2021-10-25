const { Router } = require('express');
const { isAuth } = require('../middlewares/auth');
const { categoryRequired } = require('../validations/category.validation');
const { createCategory } = require('../controllers/category.controller');

const router = Router();

router.post('/categories', categoryRequired, isAuth, createCategory);

module.exports = router;