const express = require('express');

const router = express.Router();

const {
  validateTitle,
  validContent,
  validCategoryId,
  validCategoryIds,
} = require('../middlewares/postValidation');
const { authValidation } = require('../middlewares/authValidation');

const PostController = require('../controller/postController');

router.post('/',
  authValidation,
  validateTitle,
  validContent,
  validCategoryId,
  validCategoryIds,
  PostController.createPosts);

router.get('/', authValidation, PostController.getAll);

module.exports = router;