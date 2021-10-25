const express = require('express');
const {
  validateUser,
  validateEmail,
  validateCategories,
  validatePost,
} = require('../middlewares/validate');
const userController = require('../controllers/userController');

const loginController = require('../controllers/loginController');

const { tokenValidate } = require('../middlewares/tokenValidate');

const categorieController = require('../controllers/categorieController');

const postController = require('../controllers/postController');

const router = express.Router();
router.get('/user/:id', tokenValidate, userController.getUser);
router.get('/user', tokenValidate, userController.getAllUsers);
router.post('/user', validateUser, userController.createUser);

router.post('/login', validateEmail, loginController.login);

router.get('/categories', tokenValidate, categorieController.getAllCategorie);
router.post('/categories', tokenValidate, validateCategories, categorieController.createCategory);

router.get('/post', tokenValidate, postController.getAllPost);
router.post('/post', tokenValidate, validatePost, postController.createPost);

module.exports = router;
