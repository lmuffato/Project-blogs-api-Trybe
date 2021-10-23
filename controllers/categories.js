const categoriesService = require('../services/categories');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const categorie = await categoriesService.createCategorie(name);
  return res.status(201).json(categorie);
};

module.exports = {
  createCategorie,
};