const express = require('express');
const { createPost } = require('../../controllers/BlogPosts');
const checkCategoryExists = require('../../middlewares/checkCategoryExists');
const auth = require('../../middlewares/auth');
const validate = require('../../schemas/validate');
const fieldsValidation = require('../../middlewares/fieldsValidation');

const postRouter = express.Router();

postRouter
  .route('/')
  .post(
    auth,
    validate.createPost(),
    fieldsValidation,
    checkCategoryExists,
    createPost,
  );

module.exports = postRouter;
