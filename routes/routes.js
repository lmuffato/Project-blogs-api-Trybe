const { Router } = require('express');
const CategoriesRouter = require('../controllers/categoriesController');
const LoginRouter = require('../controllers/loginController');
const UserRouter = require('../controllers/userController');

const router = Router();

router.use('/user', UserRouter);
router.use('/login', LoginRouter);
router.use('/categories', CategoriesRouter);
// router.use('/post');

module.exports = router;