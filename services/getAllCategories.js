const { Category } = require('../models');

module.exports = async () => {
  const categories = await Category.findAll();
  return categories;
};