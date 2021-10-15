const postService = require('../services/postService');

const createPost = async (req, res) => {
  const data = req.body;
  const { message, statusCode, blogpost } = await postService.createPost(data, req.user);
  return res.status(statusCode).json(message ? { message } : (blogpost));
};

module.exports = {
  createPost,
};
