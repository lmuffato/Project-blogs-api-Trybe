const errors = require('../../utils/errors');
const httpStatusCode = require('../../utils/httpStatusCode');
const { Post } = require('../../../models');

async function validateOwner(postId, userId) {
  try {
    const storagePost = await Post.findOne({ where: { id: postId } });

    if (storagePost.userId !== userId) {
      return {
        status: httpStatusCode.unauthorized,
        message: 'Unauthorized user',
      };
    }
  } catch (err) {
    console.error({ error: err.message });

    return {
      status: httpStatusCode.notFound,
      message: errors.postNotExistError,
    };
  }
}

module.exports = validateOwner;