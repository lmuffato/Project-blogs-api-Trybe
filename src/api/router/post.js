const { Router } = require('express');

const {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
} = require('../validations/post/validates');

const {
  createController,
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

module.exports = router;