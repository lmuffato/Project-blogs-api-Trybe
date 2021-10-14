const Post = require('../Services/postService');

const addNew = async (req, res, next) => {
  const { user, body } = req;
  const result = await Post.create(body, user);
  if (result.message) return next(result);

  return res.status(201).json(result);
};

module.exports = {
  addNew,
};
