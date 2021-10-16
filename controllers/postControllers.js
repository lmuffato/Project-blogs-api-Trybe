const { createPost, getPosts, postById } = require('../services/postService');
const { STATUS_CREATED, STATUS_OK } = require('../utils/msg');

const createPostController = async (req, res) => {
  const addPost = req.body;
  const blogPost = await createPost(addPost);
  return res.status(STATUS_CREATED).json(blogPost);
};

const getPostController = async (_req, res) => {
  const blogPosts = await getPosts();
  return res.status(STATUS_OK).json(blogPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await postById(id);
  return res.status(STATUS_OK).json(blogPost);
};

module.exports = { createPostController, getPostController, getPostById };