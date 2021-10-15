const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createBlogPost, getBlogPosts } = require('../controllers');

router.post('/', validateJWT, createBlogPost);
router.get('/', validateJWT, getBlogPosts);

module.exports = router;
