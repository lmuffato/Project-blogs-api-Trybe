const express = require('express');
const rescue = require('express-rescue');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', rescue(postController.addPost));
postRouter.get('/', rescue(postController.getAllPosts));

module.exports = postRouter;