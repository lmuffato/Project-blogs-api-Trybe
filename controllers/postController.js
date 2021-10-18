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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const data = req.body;
  const { message, statusCode, post } = await postService.updatePost(id, userId, data);
  return res.status(statusCode).json(message ? { message } : (post));
};

const removePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { message, statusCode } = await postService.removePost(id, userId);
  return res.status(statusCode).json({ message });
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
  updatePost,
  removePost,
};
