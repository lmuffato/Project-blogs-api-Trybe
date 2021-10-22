const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { id } = req.user;
  const blogPost = req.body;

  const newPost = await postService.createPost(blogPost, id);

  if (newPost.code) return next(newPost);

  res.status(201).json(newPost);
};

const findPost = async (req, res) => {
  const posts = await postService.findPost();

  res.status(200).json(posts);
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.findById(id);

  if (post.code) return next(post);

  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  console.log('chegou');

  const updated = await postService.updatePost(id, newData);

  res.status(200).json(updated);
};

module.exports = {
  findById,
  createPost,
  findPost,
  updatePost,
};