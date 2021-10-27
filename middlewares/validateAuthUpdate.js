const { UNAUTHORIZED } = require('../utils/statusCode');
const { ValidateError, NOT_FOUND } = require('../utils');
const { Post } = require('../services');

module.exports = async (req, _res, next) => {
  const { userId } = req;
  const { id } = req.params;
  try {
    const post = await Post.getById(id);
    if (!post) return next(ValidateError(NOT_FOUND, 'Post does not exist'));
    if (post.userId !== userId) return next(ValidateError(UNAUTHORIZED, 'Unauthorized user'));
    next();
  } catch (err) {
    next(err);
  }
};