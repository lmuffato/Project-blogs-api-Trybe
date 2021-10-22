const { BlogPost, User, Categorie } = require('../models');
const { validationPost } = require('../validations/PostValidations');

const createPost = async (title, content, categoryIds, userId) => {
  const validations = await validationPost(title, categoryIds, content);
  if (validations.message) return validations;

  const newPost = await BlogPost.create(
    { userId, title, content, published: new Date(), updated: new Date() },
  );
  return { newPost };
};

const listPosts = async () => {
  const list = await BlogPost.findAll(
    { include: [{ model: User, as: 'user' }, 
    { model: Categorie, as: 'categories', attributes: { exclude: ['PostCategorie'] } }] },
);
  const [{ dataValues }] = list;
  return dataValues;
};

module.exports = {
  createPost,
  listPosts,
};
