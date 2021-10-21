const { getPostById } = require('../services/BlogPosts');
const { notEditable, notFoundPost, unauthorized } = require('../utils/errors');

const validateOnUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;

  if (req.body.categoryIds) {
    return res.status(notEditable.code).json({ message: notEditable.message });
  }

  const post = await getPostById(id);

  if (!post) {
    return res
      .status(notFoundPost.code)
      .json({ message: notFoundPost.message });
  }

  if (post.userId !== user.id) {
    return res
      .status(unauthorized.code)
      .json({ message: unauthorized.message });
  }

  next();
};

module.exports = validateOnUpdate;
