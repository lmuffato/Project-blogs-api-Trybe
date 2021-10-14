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

module.exports = {
  createPost,
  getAllPosts,
};
