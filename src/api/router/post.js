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
  deleteController,
  queryController,
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
  '/search',
  validateToken,
  queryController,
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

router.delete(
  '/:id',
  validateToken,
  deleteController,
);

module.exports = router;