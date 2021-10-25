const { Category } = require('../models');

const create = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAll = () => Category.findAll().then((res) => res);

const getByName = (name) => Category.findOne({ where: { name } }).then((res) => res);

module.exports = {
  create,
  getAll,
  getByName,
};