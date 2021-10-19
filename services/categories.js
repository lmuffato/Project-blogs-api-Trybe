const { Category } = require('../models');
const { categoriesValidation } = require('../utils/schema');

const BAD_REQUEST_STATUS = 400;
const CREATED_STATUS = 201;

const createCategoryService = async (name) => {
  const { error } = categoriesValidation.validate({ name });
  if (error) {
    return {
      status: BAD_REQUEST_STATUS,
      message: error.details[0].message,
    };
  }

  const category = await Category.create({ name });

  return { status: CREATED_STATUS, data: category };
};

module.exports = {
  createCategoryService,
};
