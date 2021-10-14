const services = require('../services/categories');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  const response = await services.createCategory(name);

  if (response.code) return next(response);

  return res.status(201).json(response);
};

const getAllCategories = async (req, res) => {
  const response = await services.getAllCategories();

  return res.status(200).json(response);
};

module.exports = {
  createCategory,
  getAllCategories,
};
