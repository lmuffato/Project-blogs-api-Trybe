const express = require('express');
const rescue = require('express-rescue');
const post = require('../controllers/postControllers');
const tokenValidation = require('../middlewares/tokenValidation');
const postValidation = require('../middlewares/postValidation');

const postRouter = express.Router();

postRouter.post('/', tokenValidation, postValidation, rescue(post.createPostController));
postRouter.get('/', tokenValidation, rescue(post.getPostController));
postRouter.get('/:id', tokenValidation, rescue(post.getPostById));

module.exports = postRouter;