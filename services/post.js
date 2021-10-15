const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');

const validateFieldsFilled = (title, content, categoryIds) => {
  if (title === undefined) {
    return { message: '"title" is required', check: false }; 
  }
  if (content === undefined) {
    return { message: '"content" is required', check: false }; 
  }
  if (categoryIds === undefined) {
    return { message: '"categoryIds" is required', check: false }; 
  }
  return { check: true };
};

const areCategoriesExists = async (categoryIds) => (
  categoryIds.reduce(async (check, id) => {
    const category = await Category.findOne({ where: { id } });
    if (category === null) return false;
    return check; 
  }, true)  
);
const create = async (title, content, categoryIds, userId) => {
  const isFielsFilled = validateFieldsFilled(title, content, categoryIds);
  if (!isFielsFilled.check) {
    const { message } = isFielsFilled;
    return { message };
  }
  if (!await areCategoriesExists(categoryIds)) {
    return { message: '"categoryIds" not found' };
  }
  try {
    const post = await BlogPost.create({ title, content, categoryIds, userId });
    return { post };
  } catch (e) {
    console.log(e.message);
    return { message: 'Algo deu errado' };
  }
};

const getById = async (postId) => {
  const post = await BlogPost.findOne({ where: { id: postId } });
  if (!post) {
    return { message: 'Post does not exist' };
  }
  return { post };
};

const validateUpdateFieldsFilled = (title, content, categoryIds) => {
  if (title === undefined) {
    return { message: '"title" is required', check: false }; 
  }
  if (content === undefined) {
    return { message: '"content" is required', check: false }; 
  }
  if (categoryIds !== undefined) {
    return { message: 'Categories cannot be edited', check: false }; 
  }
  return { check: true };
};

const update = async (postInfo, userIdLogged) => {
  const { postId, categoryIds, content, title } = postInfo;
  const isPostInfoValid = validateUpdateFieldsFilled(title, content, categoryIds);
  if (!isPostInfoValid.check) {
    const { message } = isPostInfoValid;
    return { message, codeError: 'wrong request format' };
  }
  const { post, message } = await getById(postId);
  if (message !== undefined) return { message, codeError: 'Information not found' };
  if (post.userId !== userIdLogged) {
    return { message: 'Unauthorized user', codeError: 'Unauthorized user' };
  }
  await BlogPost.update({ title, content }, { where: { id: postId } });
  const postUpdated = await BlogPost.findOne({ where: { id: postId },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return { postUpdated };
};

const deleteById = async (postId, userIdLogged) => {
  const { post, message } = await getById(postId);
  if (message !== undefined) {
    return { message, codeError: 'Information not found' };
  }
  if (post.userId !== userIdLogged) {
    return { message: 'Unauthorized user', codeError: 'Unauthorized user' };
  }
  await BlogPost.destroy({ where: { id: postId } });
  return { message: 'Post was deleted' };
};

const getAll = async () => (
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  })
);

const findByQuery = async (queryInfo) => {
if (queryInfo === '') {
  const posts = await getAll();
  return { posts };
}
const posts = await BlogPost.findAll({
  where: {
    [Op.or]: [
      { title: { [Op.like]: `%${queryInfo}%` } },
      { content: { [Op.like]: `%${queryInfo}%` } },
    ],
  },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});
return { posts };
};

module.exports = { create, update, deleteById, findByQuery };