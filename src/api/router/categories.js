const { Router } = require('express');

const {
  validateToken,
  validateName,
} = require('../validations/categories/validates');

const {
  createController,
  readAllController,
} = require('../controllers/categoriesController');

const router = Router();

router.post(
  '/',
  validateName,
  validateToken,
  createController,
);

router.get(
  '/',
  validateToken,
  readAllController,
);

module.exports = router;