const express = require('express');

const router = express.Router();

const {
  CreatePostController,
  GetPostsController,
  GetPostByIdController,
  EditPostController,
  DeletePostController,
  SearchPostController,
} = require('../controllers/blogposts');

const authToken = require('../middlewares/authToken');

const authPost = require('../middlewares/blogpost/authPost');

const authUpdatePost = require('../middlewares/blogpost/authUpdatePost');

router.get('/search', authToken, SearchPostController.handle);

router.get('/:id', authToken, GetPostByIdController.handle);

router.put('/:id', authToken, authUpdatePost, EditPostController.handle);

router.delete('/:id', authToken, DeletePostController.handle);

router.post('/', authToken, authPost, CreatePostController.handle);

router.get('/', authToken, GetPostsController.handle);

module.exports = router;
