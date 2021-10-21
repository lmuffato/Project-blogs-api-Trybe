const BlogPostService = require('../services/BlogPostService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user;

  const { newPost, code, message } = await BlogPostService
  .createPost(title, content, categoryIds, userId);
  if (message) return res.status(code).json({ message });

  res.status(201).json(newPost);
};

module.exports = {
  createPost,
};