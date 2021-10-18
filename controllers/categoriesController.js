const categoriesServices = require('../services/categoriesServices');

const createCategories = async (req, res) => {
  const categories = await categoriesServices.createCategories(req.body);

  return res.status(201).json(categories);
};

const getCategories = async (_req, res) => {
  const categories = await categoriesServices.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategories,
  getCategories,
};