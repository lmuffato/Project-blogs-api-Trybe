require('dotenv').config();
const { Category } = require('../models');

const create = async (categorieData) => {
  const { name } = categorieData;
  const newCategory = await Category.create({ name });
  return { status: 201, data: newCategory };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

module.exports = {
  create,
  getAll,
};