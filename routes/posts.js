const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createBlogPost,
  getBlogPosts, 
  getPostById,
  updatePost } = require('../controllers');

router.post('/', validateJWT, createBlogPost);
router.get('/', validateJWT, getBlogPosts);
router.get('/:id', validateJWT, getPostById);
router.put('/:id', validateJWT, updatePost);

module.exports = router;
