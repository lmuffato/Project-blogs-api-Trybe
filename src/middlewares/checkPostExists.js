const { getPostById } = require('../services/BlogPosts');
const { notFoundPost } = require('../utils/errors');

const checkPostExists = async (req, res, next) => {
  const { id } = req.params;

  const post = await getPostById(id);

  if (!post) {
    return res
      .status(notFoundPost.code)
      .json({ message: notFoundPost.message });
  }

  req.post = post.dataValues;

  next();
};

module.exports = checkPostExists;