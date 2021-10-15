const express = require('express');
const blogPostController = require('../controllers/blogPost');

const validations = require('../middlewares/validations');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', [
  validateToken,
  validations.validatePostTitle,
  validations.validatePostContent,
  validations.validatePostCategoryIds,
  validations.validateCategoryIdExists,
  blogPostController.create,
]);

router.get('/', [
  validateToken,
  blogPostController.getAll,
]);

module.exports = router;
