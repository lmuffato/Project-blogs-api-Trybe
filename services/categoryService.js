const { Category } = require('../models');
const errorMap = require('../utils/errorMap');
const { verifyToken } = require('../utils/verifyToken');

const findCategoryByName = async (name) => Category.findOne({ where: { name } });

const create = async (name, token) => {
  try {
    const isValidToken = verifyToken(token);

    if (!isValidToken) return errorMap.invalidToken;

    const categoryExists = await findCategoryByName(name);

    if (categoryExists) return errorMap.categoryAlreadyExists;

    const newCategory = await Category.create({ name });

    return newCategory;
  } catch (error) {
    return errorMap.internalError;
  }
};

const gettAll = async (token) => {
  try {
    const isValidToken = verifyToken(token);

    if (!isValidToken) return errorMap.invalidToken;

    const categories = await Category.findAll();
    
    return categories;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { create, gettAll };