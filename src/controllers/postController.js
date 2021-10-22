const Posts = require('../services/postServices');

const getAllPosts = async (_req, res) => {
  const { status, data } = await Posts.getAllPosts();

  res.status(status).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Posts.getPostById(id);

  if (message) {
    return res.status(status).json({ message });
  }

  res.status(status).json(data);
};

module.exports = {
  getAllPosts,
  getPostById,
};
