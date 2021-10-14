const { Categories } = require('../models');

const createCategorie = async (data) => {
  const newCategorie = Categories.create(data);
  return newCategorie;
};

module.exports = {
  createCategorie,
};