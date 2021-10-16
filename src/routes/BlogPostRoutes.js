const express = require('express');
const rescue = require('express-rescue');
const BlogPostControllers = require('../controllers/blogPost');
const authMiddleware = require('../middlewares/authMiddleware');

const route = express.Router();

route.post('/', authMiddleware, rescue(BlogPostControllers.createPost));
route.get('/', authMiddleware, rescue(BlogPostControllers.findAllPosts));

module.exports = route;