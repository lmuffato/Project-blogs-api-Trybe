const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createBlogPost } = require('../controllers');

router.post('/', validateJWT, createBlogPost);

module.exports = router;
