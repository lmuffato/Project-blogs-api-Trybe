const Category = require('../services/categoriesService');

const getAll = async (_req, res) => {
  const { status, data } = await Category.getAll();

  res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data, message } = await Category.create(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
};
