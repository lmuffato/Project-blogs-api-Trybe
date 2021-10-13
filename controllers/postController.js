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
module.exports = {
    createPost,
    getAllPost,
};
