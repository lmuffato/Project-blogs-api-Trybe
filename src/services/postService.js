const { httpStatusCode } = require('../utils/errors');

const postsModel = require('../models/postsModel');
const validatePostFields = require('../validations/postsValidations');
const validateToken = require('../validations/tokenValidations');

module.exports = {
  async createPost(token, title, content, categoryIds) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const validations = await validatePostFields(title, content, categoryIds);

    if (validations) {
      return validations;
    }

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

  async getPost(token, id) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    if (id) {
      const post = await postsModel.findPost(id);

      return {
        status: httpStatusCode.ok,
        post,
      };
    }

    const allPosts = await postsModel.findPost();

    return {
      status: httpStatusCode.ok,
      allPosts,
    };
  },
};
