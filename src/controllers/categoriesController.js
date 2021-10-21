const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await categoriesService.createCategory({ name });

  res.status(201).json(category);
};

const findCategories = async (req, res) => {
  const categories = await categoriesService.findCategories();

  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  findCategories,
};