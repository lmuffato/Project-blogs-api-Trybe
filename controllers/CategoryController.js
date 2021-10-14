const Categories = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { status, data } = await Categories.createCategory(name);
  return res.status(status).json(data);
};

const getCategories = async (_req, res) => {
  const { status, data } = await Categories.getCategories();
  return res.status(status).json(data);
};

module.exports = {
  getCategories,
  createCategory,
};
