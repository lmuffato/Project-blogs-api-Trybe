const postService = require('../services/postService');

const addPost = async (req, res) => {
  const token = req.headers.authorization;
  const { status, response } = await postService.addPost(req.body, token);
  return res.status(status).json(response);
};

const getPost = async (req, res) => {
  const token = req.headers.authorization;
  const { status, response } = await postService.getPost(token);
  return res.status(status).json(response);
};

module.exports = {
  addPost,
  getPost,
};
