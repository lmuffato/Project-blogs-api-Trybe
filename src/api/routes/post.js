const express = require('express');
const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} = require('../../controllers/BlogPosts');
const checkCategoryExists = require('../../middlewares/checkCategoryExists');
const auth = require('../../middlewares/auth');
const validate = require('../../schemas/validate');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validateOnUpdate = require('../../middlewares/validateOnUpdate');
const checkPostExists = require('../../middlewares/checkPostExists');

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
    checkPostExists,
    validateOnUpdate,
    updatePost,
  )
  .delete(auth, checkPostExists, deletePost);

module.exports = postRouter;
