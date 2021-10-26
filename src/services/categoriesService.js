const categoriesModel = require('../models/categoriesModel');

const { httpStatusCode } = require('../utils/errors');
const validadeCategory = require('../validations/categoriesValidations');
const validateToken = require('../validations/tokenValidations');

module.exports = {
  async createCategory(token, name) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const validations = validadeCategory(name);

    if (validations) return validations;

    const newCategory = await categoriesModel.createCategory(name);

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

    const allCategories = await categoriesModel.getAllCategories();

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
