const schema = require('../utils/schema');
const { Post, User, Category } = require('../models');

const getById = async (id) => {
  const post = await Post.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { status: 404, message: 'Post does not exist' };

  return { status: 200, data: post };
};

// src:https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries
const updateById = async (id, data) => {
  const { title, content } = data;
  const newData = { categoryIds: [id], title, content };
  const { error } = schema.Posts.validate(newData);
  
  if (error) return { status: 400, message: error.details[0].message };

  const getpost = await getById(id);

  await Post.update({ title, content },
   {
     where: {
      id,
    },
  });

  return { status: 200, data: getpost };
};

const getAll = async () => {
  const posts = await Post.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, data: posts };
};

const create = async (data, { id: userId }) => {
  const { error } = schema.Posts.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const { categoryIds, title, content } = data;
  const post = await Post
    .create({ title, content, userId, published: new Date(), updated: new Date() });

  const getCategories = await Category.findAll({ where: { id: categoryIds } });

  if (getCategories.length !== categoryIds.length) {
    return { status: 400, message: '"categoryIds" not found' };
  }

  return { status: 201, data: post };
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
