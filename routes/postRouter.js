const express = require('express');

const route = express.Router();

const {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
  validatePostId,
} = require('../middlewares/PostMiddleware');

const postController = require('../controllers/PostController');

route.post('/', 
  validateTitle, validateContent, validateCategoryIds, validateToken, postController.createPost);
route.get('/', validateToken, postController.listAllPosts);
route.get('/:id', validateToken, validatePostId, postController.findPostById);

module.exports = route;