const { Router } = require('express');
const validateToken = require('../auth/validateToken');

const router = Router();

const {
  addBlogPost,
} = require('../Controllers/blogPostController');

router.post('/', validateToken, addBlogPost);

module.exports = router;