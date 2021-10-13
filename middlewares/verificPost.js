const { BlogPosts } = require('../models');

const existPost = async (req, res, next) => {
  const { id } = req.params;

  const post = await BlogPosts.findOne({ where: { id } });

  if (!post) {
    return next({
      code: 404,
      message: 'Post does not exist',
    });
  }
  
  next();
};

module.exports = { existPost };
