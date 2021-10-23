const { BlogPost } = require('../models');
const { User } = require('../models');
const postValidation = require('../validations/postValidation');

const addPost = async (title, categoryIds, content, token) => {
  postValidation.validatePostTitle(title);
  postValidation.validatePostContent(content);
  await postValidation.validatePostCategory(categoryIds);
  const email = postValidation.validateToken(token);
  const findUser = await User.findOne({ where: { email } });
  const newPost = await BlogPost.create({
    userId: findUser.id,
    title,
    content,
  });
  return { status: 201, response: newPost.dataValues };
};

module.exports = {
  addPost,
};
