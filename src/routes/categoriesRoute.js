const { Router } = require('express');
const validateToken = require('../auth/validateToken');

const router = Router();

const {
  addCategories,
  getCategories,
} = require('../Controllers/categoriesController');

router.get('/', validateToken, getCategories);
router.post('/', validateToken, addCategories);

module.exports = router;