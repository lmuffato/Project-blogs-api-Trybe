const { Category } = require('../../models');

const findAll = async () => {
  const categoriesList = Category.findAll({ order: [['id', 'ASC']] });

  return categoriesList;
};

module.exports = findAll;