const categoriesService = require('../services/categoriesServices');

const createCategorie = async (req, res) => {
  const newCategorie = await categoriesService.createCategorie(req.body);
  return res.status(201).json(newCategorie);
};

const listCategories = async (_req, res) => {
  const categories = await categoriesService.listCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategorie,
  listCategories,
};