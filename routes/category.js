const express = require('express');
const { Category } = require('../models');

const validations = require('../middlewares/validations');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', [
  validateToken,
  validations.validateCategoryName,
  Category.create,
]);

module.exports = router;