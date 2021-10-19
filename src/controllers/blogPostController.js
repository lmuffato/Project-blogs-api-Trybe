const blogPostService = require('../services/blogPostService');

const createPost = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const userId = req.user.id;
  console.log(userId);
  const result = await blogPostService.createPost(title, categoryIds, content, userId);
  return res.status(201).json(result);
};

module.exports = {
  createPost,
};