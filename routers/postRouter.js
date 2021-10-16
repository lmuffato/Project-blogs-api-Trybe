const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const validateUserFields = require('../middlewares/validatePostFields');
const validateBlogPostUpdate = require('../middlewares/validateBlogPostUpdate');
const controllers = require('../controllers');

const postRouter = express.Router();

postRouter.post('/', auth, validateUserFields, rescue(controllers.createPost));

postRouter.get('/', auth, controllers.getAllPosts);
postRouter.get('/:id', auth, rescue(controllers.getPostById));

postRouter.put('/:id', auth, validateBlogPostUpdate, rescue(controllers.updateBlogPosts));

postRouter.delete('/:id', auth, rescue(controllers.deleteBlogPosts));

module.exports = postRouter;