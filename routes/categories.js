const express = require('express');
const { categories: { create } } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/categories',
  middlewares.categories.categoriesValidate,
  middlewares.token.tokenValidate,
  create);

module.exports = router;
