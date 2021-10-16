const { BlogPost, Category } = require('../models');
const { UNAUTHORIZED_USER, POST_DOES_NOT_EXISTS } = require('../utils/errorMessages');

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const checkIfPostExist = async (id) => {
  const post = await getPostById(id);
  if (!post) throw POST_DOES_NOT_EXISTS;
};

const checkIfUserIsValid = async (id, userId) => {
  const user = await getPostById(id);

  if (user.dataValues.userId !== userId) throw UNAUTHORIZED_USER;
};

module.exports = {
  getPostById,
  checkIfUserIsValid,
  checkIfPostExist,
};