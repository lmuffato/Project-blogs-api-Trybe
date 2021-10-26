const postService = require('../services/postService');

const addPost = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const { authorization: token } = req.headers;
  const { status, response } = await postService.addPost(title, categoryIds, content, token);
  res.status(status).json(response);
};

const getAllPosts = async (req, res) => {
  const { authorization: token } = req.headers;
  const { status, response } = await postService.getAllPosts(token);
  res.status(status).json(response);
};

module.exports = {
  addPost,
  getAllPosts,
};
