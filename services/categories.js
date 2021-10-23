require('dotenv').config();

const { Category } = require('../models');

const createCategorie = async (name) => {
  await Category.create({ name });
  const categorie = await Category.findOne({ where: { name } }, { attributes: ['id', 'name'] });
  return categorie;
};

module.exports = {
  createCategorie,
};