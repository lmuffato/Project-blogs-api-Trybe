const postService = require('../services/post');

async function createPost(req, res, _next) {
  console.log('reqUser', req.user);
  const { status, data, message } = await postService.createPost(req.body, req.user);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
}

module.exports = { createPost };