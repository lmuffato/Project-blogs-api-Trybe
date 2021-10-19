const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  
  const { newCategory, code, message } = await CategoryService.createCategory({ name });
  if (message) return res.status(code).json({ message });
  
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};