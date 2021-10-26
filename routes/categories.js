const express = require('express');
const { categories: { create, getAll } } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/categories',
  middlewares.categories.categoriesValidate,
  middlewares.token.tokenValidate,
  create);

router.get('/categories',
  middlewares.token.tokenValidate,
  getAll);

module.exports = router;
