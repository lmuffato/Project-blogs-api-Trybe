const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const data = req.body;
  const { status, message, category } = await categoryService.createCategory(data);
  return res.status(status).json(message ? { message } : (category));
};

const getAllCategories = async (_req, res) => {
  const { status, categories } = await categoryService.getAllCategories();
  return res.status(status).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};