const rescue = require('express-rescue');
const serviceBlogPost = require('../service/blogPost');

const createBlogPost = rescue(
  async (req, res) => {
    const { authorization } = req.headers;

    const newBlog = await serviceBlogPost.createBlogPost(req.body, authorization);

    res.status(201).json(newBlog);
  },
);

const findAllPost = rescue(
  async (req, res) => {
    const { authorization } = req.headers;

    const posts = await serviceBlogPost.findAllPost(authorization);

    res.status(200).json(posts);
  },
);

module.exports = {
  createBlogPost,
  findAllPost,
};
