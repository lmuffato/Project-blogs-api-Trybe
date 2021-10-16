require('dotenv').config();
// const jwt = require('jsonwebtoken');
const { Category } = require('../models');

// const { SECRET } = process.env;

const create = async (categorieData) => {
  const { name } = categorieData;
  const newCategory = await Category.create({ name });
  return { status: 201, data: newCategory };
};

module.exports = {
  create,
};