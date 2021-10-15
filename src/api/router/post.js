const { Router } = require('express');

const {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
} = require('../validations/post/validates');

const {
  createController,
  readAllController,
  readByIdController,
} = require('../controllers/postController');

const router = Router();

router.post(
  '/',
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
  createController,
);

router.get(
  '/',
  validateToken,
  readAllController,
);

router.get(
  '/:id',
  validateToken,
  readByIdController,
);

module.exports = router;