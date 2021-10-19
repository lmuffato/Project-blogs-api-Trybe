const { Category } = require('../models');

const Schema = require('../utils/schema');

const create = async (body) => {
  const { error } = Schema.Category.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const newCategory = await Category.create(body);

  return { status: 201, data: newCategory };
};

module.exports = {
  create,
};
