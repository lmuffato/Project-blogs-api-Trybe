const { Category } = require('../../models');
const httpStatusCode = require('../utils/httpStatusCode');
const validadeCategory = require('../validations/categories/validateCategory');
const validateToken = require('../validations/token/validateToken');

module.exports = {
  async createCategory(token, name) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const validations = validadeCategory(name);

    if (validations) return validations;

    const newCategory = await Category.create({ name });

    if (newCategory) {
      return {
        status: httpStatusCode.created,
        newCategory,
      };
    }
  },

  async findAll(token) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const allCategories = await Category.findAll();

    if (allCategories) {
      return {
        status: httpStatusCode.ok,
        allCategories,
      };
    }

    return {
      status: httpStatusCode.badRequest,
      message: 'num foi possivel lista',
    };
  },
};
