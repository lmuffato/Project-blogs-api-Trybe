const { Category } = require('../models');
const Schema = require('../utils/schema');

const create = async (data) => {
  const { error } = Schema.Categories.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const category = await Category.create(data);

  return { status: 201, data: category };
};

module.exports = {
  create,
};