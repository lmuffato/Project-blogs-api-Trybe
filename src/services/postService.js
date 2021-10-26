const { httpStatusCode } = require('../utils/errors');

const postsModel = require('../models/postsModel');
const validatePostFields = require('../validations/postsValidations');
const validateToken = require('../validations/tokenValidations');

module.exports = {
  async createPost(token, title, content, categoriesIds) {
    const userId = validateToken(token);
    
    const validations = validatePostFields(title, content, categoriesIds);

    if (validations) {
      return validations;
    }

    const post = await postsModel.createPost(userId, title, content);

    return {
      status: httpStatusCode.created,
      post,
    };
  },
};
