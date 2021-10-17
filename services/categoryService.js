const { Category } = require('../models');
const errorMap = require('../utils/errorMap');

const findCategoryByName = async (name) => Category.findOne({ where: { name } });

const create = async (name) => {
  try {
    const categoryExists = await findCategoryByName(name);

    if (categoryExists) return errorMap.categoryAlreadyExists;

    const newCategory = await Category.create({ name });

    return newCategory;
  } catch (error) {
    return errorMap.internalError;
  }
};

const gettAll = async () => {
  try {
    const categories = await Category.findAll();
    
    return categories;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { create, gettAll };