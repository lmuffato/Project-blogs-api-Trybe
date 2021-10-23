const express = require('express');
const usersController = require('../controllers/usersController');
const loginController = require('../controllers/loginController');
const categoriesController = require('../controllers/categoriesController');
const postController = require('../controllers/postController');

const router = express.Router();

router.use('/user', usersController);
router.use('/login', loginController);
router.use('/categories', categoriesController);
router.use('/post', postController);

module.exports = router;