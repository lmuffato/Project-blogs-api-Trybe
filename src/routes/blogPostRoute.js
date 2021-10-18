const { Router } = require('express');
const validateToken = require('../auth/validateToken');

const router = Router();

const {
  addBlogPost,
  getAllPosts,
} = require('../Controllers/blogPostController');

router.get('/', validateToken, getAllPosts);
router.post('/', validateToken, addBlogPost);

module.exports = router;