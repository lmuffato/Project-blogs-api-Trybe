const { Category } = require('../models');
const check = require('../utils/util');

const createCategory = async ({ name }) => {
  const { error } = check.checkCategories.validate({ name });
  if (error) return { status: 400, message: error.details[0].message };

  const category = await Category.create({ name });

  return { status: 201, category };
};

const getAllCategory = async () => {
  const categories = await Category.findAll();

  return { status: 200, categories };
};

module.exports = {
  createCategory,
  getAllCategory,
};