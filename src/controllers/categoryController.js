const category = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await category.createCategory(name);
  return res.status(201).json(result);
};

module.exports = {
  createCategory,
};