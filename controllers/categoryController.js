const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.createCategory(name);

  return res.status(201).json(category);
};

const getAll = async (req, res) => {
  const category = await categoryService.getAllCategories();

  res.status(200).json(category);
};

module.exports = {
  create,
  getAll,
};
