const postService = require('../services/postService');

const createPost = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const newPost = await postService.createPost(title, content, id, categoryIds);

  return res.status(201).json(newPost);
};

module.exports = { createPost };
