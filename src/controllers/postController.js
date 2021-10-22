const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { id } = req.user;
  const blogPost = req.body;

  const newPost = await postService.createPost(blogPost, id);

  if (newPost.code) return next(newPost);

  res.status(201).json(newPost);
};

const findPost = async (req, res) => {
  const post = await postService.findPost();

  res.status(200).json(post);
};

module.exports = {
  createPost,
  findPost,
};