const postsModel = require('../models/postsModel');
const { httpStatusCode, errors } = require('../utils/errors');

async function validateOwner(postId, userId) {
  const storagePost = await postsModel.findPost(postId);

  if (storagePost === null) {
    return {
      status: httpStatusCode.notFound,
      message: errors.postNotExistError,
    };
  }

  if (storagePost.userId !== userId) {
    return {
      status: httpStatusCode.unauthorized,
      message: 'Unauthorized user',
    };
  }
}

module.exports = validateOwner;