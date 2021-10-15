const { BlogPosts, User } = require('../models');
const httpStatus = require('../utils/httpStatus');

const create = async (req, res) => {
  const { title, content } = req.body;
  const { email } = req.user;

  const { id } = await User.findOne({ where: { email } });

  const newBlogPost = await BlogPosts.create({
    title, content, userId: id, published: new Date(), updated: new Date(),
  }).then((newPost) => res.status(httpStatus.HTTP_CREATE_STATUS).json(newPost))
  .catch((e) => console.log(e));

  return newBlogPost;
};

module.exports = {
  create,
};
