const servicePost = require('../services/servicePost');

const createPost = async (req, res) => {
  const dataPost = req.body;
  const { email } = req.user;

  const { status, data } = await servicePost.createPost(dataPost, email);
  return res.status(status).json(data);
};

const getPosts = async (req, res) => {
  const { status, data } = await servicePost.getPosts();
  return res.status(status).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await servicePost.getPostById(id);

  return res.status(status).json(data);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};