const categorieService = require('../services/categorieService');

const createCategorie = async (req, res, next) => {
  const { name } = req.body;

  const newCategorie = await categorieService.createCategorie(name);

  if (newCategorie.code) return next(newCategorie);

  return res.status(201).json(newCategorie);
};

module.exports = { createCategorie };
