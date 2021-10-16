const express = require('express');
const rescue = require('express-rescue');
const post = require('../controllers/postControllers');
const tokenValidation = require('../middlewares/tokenValidation');
const postValidation = require('../middlewares/postValidation');

const postRouter = express.Router();

postRouter.post('/', tokenValidation, postValidation, rescue(post.createPostController));

module.exports = postRouter;