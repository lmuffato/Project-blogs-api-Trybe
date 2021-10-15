const validationSchema = require('../helpers/validation_schema');
const { Category } = require('../models');

const createCategory = async (data) => {
  const { error } = validationSchema.categorySchema.validate(data);
  if (error) return { statusCode: 400, message: error.details[0].message };
  const { name } = data;
  const categoryExists = await Category.findOne({ where: { name } });
  if (categoryExists) return { statusCode: 409, message: 'Category already registered' };
  const category = await Category.create(data);
  return { statusCode: 201, category };
};

module.exports = {
  createCategory,
};
