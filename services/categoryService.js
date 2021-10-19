const { Category } = require('../models');

const Schema = require('../utils/schema');

const create = async (name) => {
  const { error } = Schema.Category.validate(name);
  if (error) return { status: 400, message: error.details[0].message };

  const newCategory = await Category.create(name);

  return { status: 201, data: newCategory };
};

module.exports = {
  create,
};
