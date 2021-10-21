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
const validateOnUpdate = require('../../middlewares/validateOnUpdate');

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
  .put(
    auth,
    validate.updatePost(),
    fieldsValidation,
    validateOnUpdate,
    updatePost,
  );

module.exports = postRouter;
