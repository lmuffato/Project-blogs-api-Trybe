const categoriesModel = require('../models/categoriesModel');

const { httpStatusCode } = require('../utils/errors');
const validateToken = require('../validations/tokenValidations');

module.exports = {
  async createCategory(token, name) {
    validateToken(token);
    const newCategory = await categoriesModel.createCategory(name);

    return {
      status: httpStatusCode.created,
      newCategory: newCategory.dataValues,
    };
  },
  
};
