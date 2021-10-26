const { httpStatusCode } = require('../utils/errors');

const postsModel = require('../models/postsModel');
const validatePostFields = require('../validations/postsValidations');
const validateToken = require('../validations/tokenValidations');

module.exports = {
  async createPost(token, title, content, categoriesIds) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const validations = await validatePostFields(title, content, categoriesIds);

    if (validations) {
      return validations;
    }

    console.log({ userId: decodedToken.id, title, content });
    const post = await postsModel.createPost(decodedToken.id, title, content);

    if (post) {
      return {
        status: httpStatusCode.created,
        post,
      };
    }

    return {
      status: httpStatusCode.badRequest,
      message: 'num foi possivi',
    };
  },
};
