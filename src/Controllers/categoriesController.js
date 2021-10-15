const categoriesModel = require('../Models/categoriesModel');
const { status } = require('../utils');

const addCategories = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(status.BAD_REQUEST).json({ message: status.NAME_CATEGORIES });
  }

  const { code, category } = await categoriesModel.addCategories(name);

  return res.status(code).json(category);
};

const getCategories = async (req, res) => {
  const { code, categories } = await categoriesModel.getCategories();

  return res.status(code).json(categories);
};

module.exports = {
  addCategories,
  getCategories,
};