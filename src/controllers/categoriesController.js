const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  const category = await categoriesService.createCategory({ name });

  if (category.error) return next(category.error);

  res.status(201).json(category);
};

module.exports = {
  createCategory,
};