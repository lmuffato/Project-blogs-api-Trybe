const blogPostService = require('../services/blogPostService');

const createPost = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const result = await blogPostService.createPost(title, categoryIds, content);
  return res.status(201).json(result);
};

module.exports = {
  createPost,
};