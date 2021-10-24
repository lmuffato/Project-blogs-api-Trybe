const Category = require('../services/serviceCategory');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await Category.createCategory({ name });
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json(result.category);
};

const getAllCategory = async (_req, res) => {
  const result = await Category.getAllCategory();

  res.status(result.status).json(result.categories);
};

module.exports = {
  createCategory,
  getAllCategory,
};