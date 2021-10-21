const { Category } = require('../models');
const Joi = require('../middlewares/joi');

const createCategory = async (data) => {
  const { error } = Joi.categoriesJoi.validate(data);

  if (error) {
    return { status: 400, message: error.details[0].message };
  }

  const category = await Category.create(data);

  return { status: 201, data: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { status: 200, data: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};
