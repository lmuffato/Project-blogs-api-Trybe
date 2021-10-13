const { Categories } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Categories.findOne({ where: { name } });

  if (categorie) return { code: 404, message: 'Categorie already registered' };

  const { dataValues } = await Categories.create({ name });

  return dataValues;
};

module.exports = { createCategorie };
