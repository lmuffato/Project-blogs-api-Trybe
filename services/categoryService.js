const { Category } = require('../models');

const create = async (name) => {
  try {
    const created = await Category.create({ name });
    return created;
  } catch (e) {
    console.log(e);
  }
};

const getAll = async () => {
  try {
    const allCategories = await Category.findAll();
    return allCategories;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  getAll,
};
