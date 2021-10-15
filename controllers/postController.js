const postService = require('../services/postService');

const createPost = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const newPost = await postService.createPost(title, content, id, categoryIds);

  return res.status(201).json(newPost);
};

const getAllPost = async (_req, res, _next) => {
    const getAll = await postService.getAllPost();
  
    return res.status(200).json(getAll);
};

const getById = async (req, res, _next) => {
    const { id } = req.params;
  
    const getPost = await postService.getById(id);
  
    return res.status(200).json(getPost);
};

const editPost = async (req, res, _next) => {
    const { id } = req.params;
    const { title, content } = req.body;
  
    const newPost = await postService.editPost(id, title, content);
  
    return res.status(200).json(newPost);
};

const deletePost = async (req, res, _next) => {
  const { id } = req.params;
  
  await postService.deletePost(id);

  return res.status(204).end();
};

const searchPost = async (req, res, _next) => {
  const { q } = req.query;

  const getPosts = await postService.searchPost(q);

  return res.status(200).json(getPosts);
};

module.exports = {
  createPost,
  getAllPost,
  getById,
  editPost,
  deletePost,
  searchPost,
};
