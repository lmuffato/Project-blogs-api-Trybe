const Posts = require('../services/postService');

const getAll = async (_req, res) => {
  const { status, data } = await Posts.getAll();

  res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data, message } = await Posts.create(req.body, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
}; 