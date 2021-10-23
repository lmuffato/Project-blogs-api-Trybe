const CategoryService = require('../../services/category');

const findAll = async (_req, res) => {
  const categoriesList = await CategoryService.findAll();

  return res.status(200).json(categoriesList);
};

module.exports = findAll;