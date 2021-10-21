const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { id } = req.user;
  const blogPost = req.body;

  const newPost = await postService.createPost(blogPost, id);

  if (newPost.code) return next(newPost);

  res.status(201).json(newPost);
};

module.exports = {
  createPost,
};