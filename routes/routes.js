const express = require('express');
const {
  validateUser,
  validateEmail,
  validateCategories,
  // validatePost,
} = require('../middlewares/validate');
const userController = require('../controllers/userController');

const loginController = require('../controllers/loginController');

const { tokenValidate } = require('../middlewares/tokenValidate');

const {
  createCategory,
  getAllCategorie,
} = require('../controllers/categorieController');

// const { createPost } = require('../controllers/postController');

const router = express.Router();
router.get('/user/:id', tokenValidate, userController.getUser);
router.get('/user', tokenValidate, userController.getAllUsers);
router.post('/user', validateUser, userController.createUser);

router.post('/login', validateEmail, loginController.login);

router.get('/categories', tokenValidate, getAllCategorie);
router.post('/categories', tokenValidate, validateCategories, createCategory);

// router.post('/post', validatePost, validateCategories, tokenValidate, createPost);

module.exports = router;
