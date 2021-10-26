const { Category } = require('../models');
const categoryValidation = require('../validations/categoryValidation');
const userValidation = require('../validations/userValidation');

const addCategory = async (name, token) => {
  categoryValidation.validateCategory(name);
  userValidation.validateToken(token);
  const category = await Category.create({ name });
  return { status: 201, response: category.dataValues };
};

const getAllCategories = async (token) => {
  userValidation.validateToken(token);
  const categories = await Category.findAll();
  return { status: 200, response: categories };
};

module.exports = {
  addCategory,
  getAllCategories,
};