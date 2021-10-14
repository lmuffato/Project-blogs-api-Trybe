const { Categorie } = require('../models');

const create = async (name) => {
  try {
    const created = await Categorie.create({ name });
    return created;
  } catch (e) {
    console.log(e);
  }
};

const getAll = async () => {
  try {
    const allCategories = await Categorie.findAll();
    return allCategories;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  getAll,
};
