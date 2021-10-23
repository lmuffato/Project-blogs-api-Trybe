const { Op } = require('sequelize');
const AppError = require('../utils/AppError');
const { BlogPost, User, Category } = require('../models');
const newPostValidations = require('./validations/newPostValidations');

exports.create = async ({ title, content, categoryIds, userId }) => {
  newPostValidations.validateTitle(title);
  newPostValidations.validateContent(content);
  newPostValidations.validateCategoryId(categoryIds);
  await newPostValidations.verifyCategories(categoryIds);

  const newPost = await BlogPost.create({ title, content, categoryIds, userId });

  return {
    id: newPost.null,
    userId: newPost.dataValues.userId,
    title: newPost.dataValues.title,
    content: newPost.dataValues.content,
  };
};

exports.getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

exports.getOne = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) throw new AppError(404, 'Post does not exist');

  return post;
};

exports.updateOne = async ({ id, title, content }) => {
  newPostValidations.validateTitle(title);
  newPostValidations.validateContent(content);

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const post = await BlogPost.findByPk(id, {
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return {
    title: post.dataValues.title, 
    content: post.dataValues.content, 
    userId: post.dataValues.userId, 
    categories: post.dataValues.categories,
  };
};

exports.deleteOne = async (id) => {  
  await BlogPost.destroy({ where: { id } });

  return true;
};

exports.getSearch = async (query) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],      
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};
