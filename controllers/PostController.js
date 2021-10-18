const PostServices = require('../services/PostServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const id = req.user;
  const newPost = await PostServices.createPost(title, content, categoryIds, id);
  return res.status(201).json(newPost);
};

const listAllPosts = async (_req, res) => {
  const allPosts = await PostServices.listAllPosts();
  return res.status(200).json(allPosts);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const findedPost = await PostServices.findPostById(id);
  return res.status(200).json(findedPost);
};

module.exports = {
  createPost,
  listAllPosts,
  findPostById,
};