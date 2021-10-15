const postService = require('../services/postService');

const createPost = async (req, res) => {
  const data = req.body;
  const { message, statusCode, blogpost } = await postService.createPost(data, req.user);
  return res.status(statusCode).json(message ? { message } : (blogpost));
};

const getAllPosts = async (_req, res) => {
  const { statusCode, posts } = await postService.getAllPosts();
  return res.status(statusCode).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
};
