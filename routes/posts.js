const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createBlogPost, getBlogPosts, getPostById } = require('../controllers');

router.post('/', validateJWT, createBlogPost);
router.get('/', validateJWT, getBlogPosts);
router.get('/:id', validateJWT, getPostById);

module.exports = router;
