const post = require('../services/postService');

const getById = async (req, res) => {
  const { status, data, message } = await post.getById(req.params.id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await post.getAll();

  res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data, message } = await post.create(req.body, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
}; 