const express = require('express');
const rescue = require('express-rescue');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', rescue(postController.addPost));
postRouter.get('/', rescue(postController.getAllPosts));
postRouter.get('/:id', rescue(postController.getPostById));
postRouter.put('/:id', rescue(postController.editPost));
postRouter.delete('/:id', rescue(postController.deletePost));

module.exports = postRouter;