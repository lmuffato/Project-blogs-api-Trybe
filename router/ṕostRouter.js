const express = require('express');
const postController = require('../controller/postController');
const { existsToken, verifyToken } = require('../middlewares/jwtValidate');
const { validatePost, verifyCategoryIds } = require('../middlewares/postValidate');

const tokenValidation = [existsToken, verifyToken];

const postRouter = express.Router();

postRouter.post('/', ...tokenValidation,
  validatePost, verifyCategoryIds, postController.create);

module.exports = postRouter;
