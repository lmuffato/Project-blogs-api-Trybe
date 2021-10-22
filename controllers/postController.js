const Post = require('../services/postService');

async function findPost(_req, res) {
  const { status, data } = await Post.findPost();
  return res.status(status).json(data);
}

async function findPostById(req, res) {
  const { status, data, message } = await Post.findPostById(req.params.id);
  if (message) return res.status(status).json({ message }); 
  return res.status(status).json(data);
}

module.exports = { findPost, findPostById };