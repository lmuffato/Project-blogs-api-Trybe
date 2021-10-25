const postService = require('../services/postService');

const createPost = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  
  const { id } = req.validateUser;

  const post = await postService.createPost(title, content, id, categoryIds);
  
  if (post.message) return res.status(post.code).json({ message: post.message });

  return res.status(201).json(post);
};

const getAllPost = async (_req, res, _next) => {
  const allPost = await postService.getAllPost();

  return res.status(200).json(allPost);
};

const getPost = async (req, res, _next) => {
    const { id } = req.params;

    const searchPost = await postService.getCategory(id);

    return res.status(200).json(searchPost);
};

module.exports = { createPost, getAllPost, getPost };