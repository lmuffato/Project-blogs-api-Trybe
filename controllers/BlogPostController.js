const BlogPosts = require('../services/BlogPostService');

const createPost = async (req, res) => {
  const inPut = req.body;
  const { email } = req.user;
  const { status, data } = await BlogPosts.createPost(inPut, email);
  return res.status(status).json(data);
};

const getPosts = async (_req, res) => {
  const { status, data } = await BlogPosts.getPosts();
  return res.status(status).json(data);
};

module.exports = {
  createPost,
  getPosts,
};
