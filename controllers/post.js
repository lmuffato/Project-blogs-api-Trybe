const postService = require('../services/post');

async function getPostById(req, res, _next) {
  const { status, data, message } = await postService.getPostById(req.params.id);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
}

async function getAllPosts(_req, res, _next) {
  const { status, data } = await postService.getAllPosts();
  return res.status(status).json(data);
}

async function createPost(req, res, _next) {
  console.log('reqUser', req.user);
  const { status, data, message } = await postService.createPost(req.body, req.user);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
}

module.exports = { createPost, getAllPosts, getPostById };