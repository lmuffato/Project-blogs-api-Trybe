const { User, BlogPost, Category } = require('../models');
const { UNAUTHORIZED_USER } = require('../utils/errorMessages');

const getUserIdWithEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user.dataValues.id;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const checkIfUserIsValid = async (id, userId) => {
  const user = await getPostById(id);

  if (user.dataValues.userId !== userId) throw UNAUTHORIZED_USER;
};

module.exports = async (id, email, title, content) => {
  const userId = await getUserIdWithEmail(email);
  
  await checkIfUserIsValid(id, userId);

  await BlogPost.update({ title, content }, { where: { id } });
  
  const updatedPost = await getPostById(id);

  return updatedPost;
};