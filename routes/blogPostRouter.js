const { Router } = require('express');
const { createPost, getPosts } = require('../controllers/blogPostController');
const validateJWT = require('../middlewares/validateJWT');
const {
  validateTitle,
  validateContent,
  validateCategories,
} = require('../middlewares/validatePosts');

const router = Router();

router.post('/post', validateTitle, validateContent, validateCategories, validateJWT, createPost);
router.get('/post', validateJWT, getPosts);

module.exports = router;
