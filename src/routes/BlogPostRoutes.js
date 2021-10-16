const express = require('express');
const rescue = require('express-rescue');
const BlogPostControllers = require('../controllers/blogPost');
const authMiddleware = require('../middlewares/authMiddleware');

const route = express.Router();

route.get('/search', authMiddleware, rescue(BlogPostControllers.searchTermPost));
route.get('/:id', authMiddleware, rescue(BlogPostControllers.findByPkPost));
route.put('/:id', authMiddleware, rescue(BlogPostControllers.updatePost));
route.delete('/:id', authMiddleware, rescue(BlogPostControllers.removePost));
route.post('/', authMiddleware, rescue(BlogPostControllers.createPost));
route.get('/', authMiddleware, rescue(BlogPostControllers.findAllPosts));

module.exports = route;