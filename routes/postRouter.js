const express = require('express');

const route = express.Router();

const {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
} = require('../middlewares/PostMiddleware');

const postController = require('../controllers/PostController');

route.post('/', 
  validateTitle, validateContent, validateCategoryIds, validateToken, postController.createPost);
route.get('/', validateToken, postController.listAllPosts);

module.exports = route;