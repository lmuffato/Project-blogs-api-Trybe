const { createPost } = require('../services/postService');
const { STATUS_CREATED } = require('../utils/msg');

const createPostController = async (req, res) => {
  const addPost = req.body;
  const blogPost = await createPost(addPost);
  return res.status(STATUS_CREATED).json(blogPost);
};

module.exports = { createPostController };