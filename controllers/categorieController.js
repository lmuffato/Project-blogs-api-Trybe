const categorieService = require('../services/categorieService');

const createCategorie = async (req, res, next) => {
  const { name } = req.body;

  const newCategorie = await categorieService.createCategorie(name);

  if (newCategorie.code) return next(newCategorie);

  return res.status(201).json(newCategorie);
};

const getAllCategorie = async (_req, res, _next) => {
    const getAll = await categorieService.getAllCategorie();
  
    return res.status(200).json(getAll);
};

module.exports = {
    createCategorie,
    getAllCategorie,
 };
