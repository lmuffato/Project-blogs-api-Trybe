const { Router } = require('express');
const { createPost } = require('../controllers/blogPostController');
const validateJWT = require('../middlewares/validateJWT');
const {
  validateTitle,
  validateContent,
  validateCategories,
} = require('../middlewares/validatePosts');

const router = Router();

router.post('/post', validateTitle, validateContent, validateCategories, validateJWT, createPost);

module.exports = router;
