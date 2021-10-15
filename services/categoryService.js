const Joi = require('joi');
const { Category } = require('../models');

const categoryValidation = Joi.object({
  name: Joi.string().required(),
});

const createCategory = async (data) => {
  const { error } = categoryValidation.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  const { name } = data;
  const findCategory = await Category.findOne({ where: { name } });
  if (findCategory) return { status: 409, message: 'Category already registered' };
  const category = await Category.create(data);
  return { status: 201, category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 200, categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};