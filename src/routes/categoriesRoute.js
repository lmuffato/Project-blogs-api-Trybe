const { Router } = require('express');
const validateToken = require('../auth/validateToken');

const router = Router();

const {
  addCategories,
} = require('../Controllers/categoriesController');

router.post('/', validateToken, addCategories);

module.exports = router;