const rescue = require('express-rescue');
const serviceBlogPost = require('../service/blogPost');

const createBlogPost = rescue(
  async (req, res) => {
    const { authorization } = req.headers;
    const newBlog = await serviceBlogPost.createBlogPost(req.body, authorization);

    res.status(201).json(newBlog);
  },
);

module.exports = {
  createBlogPost,
}