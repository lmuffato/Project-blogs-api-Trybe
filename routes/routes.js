const { Router } = require('express');
const BlogPosts = require('../controllers/blogPostsControllers');
const CategoriesRouter = require('../controllers/categoriesController');
const LoginRouter = require('../controllers/loginController');
const UserRouter = require('../controllers/userController');

const router = Router();

router.use('/user', UserRouter);
router.use('/login', LoginRouter);
router.use('/categories', CategoriesRouter);
router.use('/post', BlogPosts);

module.exports = router;