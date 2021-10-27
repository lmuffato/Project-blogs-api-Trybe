const { httpStatusCode, errors } = require('../utils/errors');

const postsModel = require('../models/postsModel');
const { validatePostFields, validatePostUpdateFields } = require('../validations/postsValidations');
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
      message: 'erro ao criar',
    };
  },

  async updatePost(token, id, post) {
    const decodedToken = validateToken(token);
    if (!decodedToken.id) return decodedToken;

    const validations = await validatePostUpdateFields(post, id, decodedToken.id);
    if (validations) return validations;

    try {
      const updatedPost = await postsModel.updatePost(id, post);
      
      return {
        status: httpStatusCode.ok,
        updatedPost,
      };
    } catch (err) {
      return {
        status: httpStatusCode.badRequest,
        message: err.message,
      };
    }
  },

  async getPost(token, id) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    if (id) {
      const post = await postsModel.findPost(id);

      if (!post) {
        return { status: httpStatusCode.notFound, message: errors.postNotExistError };
      }

      return { status: httpStatusCode.ok, post };
    }

    const allPosts = await postsModel.findPost();

    return {
      status: httpStatusCode.ok,
      allPosts,
    };
  },
};
