const CategorieService = require('../services/categorie');

const create = async (req, res, next) => {
  const { name } = req.body;

  try {
    const { statusCode, category } = await CategorieService.create(name);
    res.status(statusCode).json(category);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const { statusCode, categories } = await CategorieService.getAll();
    res.status(statusCode).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};