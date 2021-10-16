const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;

  const { status, message, category } = await categoryService.create(name);
  if (!category) return res.status(status).json({ message });
  res.status(status).json(category);
};

const getAll = async (_req, res) => {
  const { status, message, categories } = await categoryService.getAll();
  if (!categories) return res.status(status).json({ message });
  res.status(status).json(categories);
};

module.exports = {
  create,
  getAll,
};