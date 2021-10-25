const { BlogPosts } = require('../models');

const checkForPost = async (req, res, next) => {
  const { id } = req.params;

  const isPost = await BlogPosts.findOne({ where: { id } });

  if (!isPost) {
    return next({
      code: 404,
      message: 'Post does not exist',
    });
  }

  next();
};

module.exports = { checkForPost };