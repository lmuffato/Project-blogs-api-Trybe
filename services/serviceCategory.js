const { Category } = require('../models');
const check = require('../utils/util');

const create = async ({ name }) => {
  const { error } = check.checkCategories.validate({ name });
  if (error) return { status: 400, message: error.details[0].message };

  const category = await Category.create({ name });

  return { status: 201, category };
};

module.exports = {
  create,
};