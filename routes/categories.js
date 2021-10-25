const { Router } = require('express');
const { Categories } = require('../controllers');
const { authMiddleware, validateCategoryData } = require('../middlewares');

const router = Router();

router
  .post('/', authMiddleware, validateCategoryData, Categories.create)
  .get('/', authMiddleware, Categories.getAll);

module.exports = router;