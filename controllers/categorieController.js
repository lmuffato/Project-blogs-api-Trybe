const categorieService = require('../services/categorieService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  const categorie = await categorieService.createCategory(name);

  if (categorie.code) return next(categorie);

  return res.status(201).json(categorie);
};

module.exports = { createCategory };