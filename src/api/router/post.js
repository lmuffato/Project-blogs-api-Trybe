const { Router } = require('express');

const {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
  validateCategorys,
} = require('../validations/post/validates');

const {
  createController,
  readAllController,
  readByIdController,
  updateController,
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

router.put(
  '/:id',
  validateCategorys,
  validateToken,
  validateTitle,
  validateContent,
  updateController,
);

module.exports = router;