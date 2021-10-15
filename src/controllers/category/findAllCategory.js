const categoryService = require('../../services/category');

module.exports = async (_req, res) => {
  const categories = await categoryService.findAllCategory();

  res.status(200).json(categories);
};