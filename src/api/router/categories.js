const { Router } = require('express');

const {
  validateToken,
  validateName,
} = require('../validations/categories/validates');

const {
  createController,
} = require('../controllers/categoriesController');

const router = Router();

router.post(
  '/',
  validateName,
  validateToken,
  createController,
);

module.exports = router;