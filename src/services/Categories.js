const { Category } = require('../models');

const getCategory = async (id) => {
  const category = await Category.findAll({ where: { id }, raw: true });

  return category;
};

module.exports = { getCategory };