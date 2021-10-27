const express = require('express');
const rescue = require('express-rescue');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', rescue(postController.addPost));
postRouter.get('/:id', rescue(postController.getPostById));
postRouter.get('/', rescue(postController.getAllPosts));
postRouter.put('/:id', rescue(postController.editPost));

module.exports = postRouter;