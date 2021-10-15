const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const validateUserFields = require('../middlewares/validatePostFields');
const controllers = require('../controllers');

const postRouter = express.Router();

postRouter.post('/', auth, validateUserFields, rescue(controllers.createPost));
postRouter.get('/', auth, controllers.getAllPosts);
postRouter.get('/:id', auth, rescue(controllers.getPostById));

module.exports = postRouter;