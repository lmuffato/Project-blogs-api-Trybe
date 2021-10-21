const express = require('express');
const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
} = require('../../controllers/BlogPosts');
const checkCategoryExists = require('../../middlewares/checkCategoryExists');
const auth = require('../../middlewares/auth');
const validate = require('../../schemas/validate');
const fieldsValidation = require('../../middlewares/fieldsValidation');

const postRouter = express.Router();

postRouter
  .route('/')
  .get(auth, getAllPosts)
  .post(
    auth,
    validate.createPost(),
    fieldsValidation,
    checkCategoryExists,
    createPost,
  );

postRouter
  .route('/:id')
  .get(auth, getPost)
  .put(auth, updatePost);

module.exports = postRouter;
