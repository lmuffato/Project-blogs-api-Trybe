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

const getById = async (req, res) => {
  const { id } = req.params;
  const { message, statusCode, post } = await postService.getById(id);
  return res.status(statusCode).json(message ? { message } : (post));
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
};
