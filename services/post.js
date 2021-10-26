const Categories = require('./categories');
const { BlogPost, User, Category } = require('../models');
const { ValidateError } = require('../utils');
const { BAD_REQUEST, NOT_FOUND } = require('../utils/statusCode');

const verifyCategory = async (categoryIds) => {
  const CategoriesAll = await Categories.getAll()
    .then((res) => res.map(({ id }) => id));
  const category = categoryIds.every((id) => CategoriesAll.includes(id));
  return category;
};

const create = async (postData) => {
  const { title, content, categoryIds, userId } = postData;
  const check = await verifyCategory(categoryIds);
  if (!check) throw ValidateError(BAD_REQUEST, '"categoryIds" not found');

  const newPost = await BlogPost.create({ title, content, userId });

  return newPost;
};

const getAll = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },  
  ],
}).then((res) => res);

const getById = (id) => BlogPost.findOne({ 
  where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },  
    ] }).then((res) => { 
      if (res === null) throw ValidateError(NOT_FOUND, 'Post does not exist');
      return res;
    });

const update = async ({ title, content, id }) => {
  await BlogPost.update({ title, content }, { where: { id } });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};