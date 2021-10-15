const services = require('../services/blogpost');

const createPost = async (req, res, next) => {
  const response = await services.createPost(req.body, req.user);

  if (response.code) return next(response);

  return res.status(201).json(response);
};

const getAllPosts = async (req, res) => {
  const response = await services.getAllPosts();
  return res.status(200).json(response);
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  const response = await services.getPostById(id);

  if (response.code) return next(response);

  return res.status(200).json(response);
};

const editPost = async (req, res, next) => {
  const { id: userId } = req.user;
  const { id } = req.params;
  const { title, content } = req.body;

  if (req.categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  const response = await services.editPost({ id, title, content }, userId);

  if (response.code) return next(response);

  return response;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
};
