const service = require('../service/post');

const createPost = async (req, res) => {
  const { status, data, message } = await service.createPost(req.body, req.user);
  
  if (message) return res.status(status).json({ message });
  
  return res.status(status).json(data);
};

const getAllPosts = async (_req, res, _next) => {
  const { status, data } = await service.getAllPosts();
  return res.status(status).json(data);
};

module.exports = {
  createPost,
  getAllPosts,
};
