const postService = require('../services/postService');

const createPost = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  
  const { id } = req.validateUser;

  const post = await postService.createPost(title, content, id, categoryIds);
  
  if (post.message) return res.status(post.code).json({ message: post.message });

  return res.status(201).json(post);
};

module.exports = { createPost };