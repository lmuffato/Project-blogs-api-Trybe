const categorieService = require('../services/categorieService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  const categorie = await categorieService.createCategory(name);

  if (categorie.code) return next(categorie);

  return res.status(201).json(categorie);
};

const getAllCategorie = async (_req, res, _next) => {
  const allCategories = await categorieService.getAllCategorie();

  return res.status(200).json(allCategories);
};

module.exports = { createCategory, getAllCategorie };