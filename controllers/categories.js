const categoriesService = require('../services/categories');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const categorie = await categoriesService.createCategorie(name);
  return res.status(201).json(categorie);
};

const getCategories = async (req, res) => {
  const categories = await categoriesService.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategorie,
  getCategories,
};