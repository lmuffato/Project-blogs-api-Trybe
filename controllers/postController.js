const Post = require('../services/postService');

async function findPost(_req, res) {
  const { status, data } = await Post.findPost();
  return res.status(status).json(data);
}

module.exports = { findPost };