const { Category } = require('../models');
const { categoriesValidation } = require('../utils/schema');

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;

// ----------------------------------- CREATE -------------------------------------- //

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

// ----------------------------------- GETALL -------------------------------------- //
const getAllCategoryService = async () => {
  const categories = await Category.findAll();

  return { status: OK_STATUS, data: categories };
};

module.exports = {
  createCategoryService,
  getAllCategoryService,
};
