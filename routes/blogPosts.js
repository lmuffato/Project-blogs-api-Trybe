const express = require('express');
const blogPostsControllers = require('../controllers/blogPostsController');
const validateToken = require('../auth/tokenValidation');

const postValidation = require('../middlewares/postValidation');

const router = express.Router();

router.post('/', validateToken, postValidation, blogPostsControllers.create);
router.get('/', validateToken, blogPostsControllers.getAllPosts);

module.exports = router;