const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  
  const { newCategory, code, message } = await CategoryService.createCategory({ name });
  if (message) return res.status(code).json({ message });

  return res.status(201).json(newCategory);
};

const listCategories = async (req, res) => {
  const list = await CategoryService.listCategories();
  return res.status(200).json(list);
};

module.exports = {
  createCategory,
  listCategories,
};