const { Categories } = require('../models');

const getCategory = async (id) => {
  const category = await Categories.findAll({ where: { id }, raw: true });

  return category;
};

module.exports = { getCategory };