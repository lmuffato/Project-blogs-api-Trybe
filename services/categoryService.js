const { Category } = require('../models');
const newCategoryValidations = require('./validations/newCategoryValidations');

exports.create = async (name) => {
  newCategoryValidations.validateName(name);

  const newCategory = await Category.create({ name });

  return { ...newCategory.dataValues, id: newCategory.null };
};
