const postService = require('../services/postService');

const create = async (req, res) => {
  const { status, data } = await postService.create(req.body, req.user.id);
  const { id, userId, title, content } = data;
  res.status(status).json({ id, userId, title, content });
};

const getAll = async (req, res) => {
  const { status, data } = await postService.getAll();
  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getById(id);
  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};