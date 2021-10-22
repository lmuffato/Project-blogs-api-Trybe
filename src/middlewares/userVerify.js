const { BlogPost } = require('../models');

const postById = async (postId) => {
  const post = await BlogPost.findByPk(postId);

  if (!post) return null;

  return post.userId;
};

module.exports = async (req, res, next) => {
  const userId = req.user.id;
  const postId = req.params.id;

  const postUserId = await postById(postId);

  if (postUserId !== userId) {
    return next({
      code: 401,
      message: 'Unauthorized user',
    });
  }

  next();
};