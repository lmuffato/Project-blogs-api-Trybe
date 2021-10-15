const express = require('express');
const categoryController = require('../controllers/category');

const validations = require('../middlewares/validations');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', [
  validateToken,
  validations.validateCategoryName,
  categoryController.create,
]);

router.get('/', [validateToken, categoryController.getAll]);

module.exports = router;