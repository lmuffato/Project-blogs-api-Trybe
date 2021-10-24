const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const { newPostValidate } = require('../validation/post');
const Utils = require('../validation/throw');
const { BlogPost: BlogPostModel,
    PostCategorie: PostCategorieModel,
    Categorie: CategorieModel } = require('../models');

const JWT_SECRET = 'senha';

const create = async (token, title, content, categoryIds) => {
  const { error } = newPostValidate.validate({ title, content, categoryIds });
  // console.log(error, 'erro do joi');
  if (error) Utils.throwError(error, 400);
  const categories = await Utils.categoryExists(categoryIds, CategorieModel);
  if (categories.includes(null)) Utils.throwError(new Error(), 400, '"categoryIds" not found');
  const { id: userId } = jwt.verify(token, JWT_SECRET);
  const { id: postId } = await BlogPostModel.create({ title, content, userId });
  const post = {
    id: postId,
    userId,
    title,
    content,
  };
  await Utils.postCategorie(postId, PostCategorieModel, categories);
  return {
    statusCode: 201,
    post,
  };
};

const getAll = async () => {
  const posts = await BlogPostModel.findAll({ include: ['user', 'categories'] });
  return {
    statusCode: 200,
    posts,
  };
};

const getById = async (id) => {
  const posts = await BlogPostModel.findByPk(id, { include: ['user', 'categories'] });
  if (!posts) Utils.throwError(new Error(), 404, 'Post does not exist');
  return {
    statusCode: 200,
    posts,
  };
};

const destroy = async (token, id) => {
  const { id: tokenUserId } = jwt.verify(token, JWT_SECRET);
  const findPost = await BlogPostModel.findByPk(id);
  if (!findPost) Utils.throwError(new Error(), 404, 'Post does not exist');
  if (tokenUserId !== findPost.dataValues.userId) {
  Utils
    .throwError(new Error(), 401, 'Unauthorized user'); 
}
  await BlogPostModel.destroy({ where: { id } });
};

const search = async (query) => {
  const item = await BlogPostModel.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: ['user', 'categories'],
  });
  console.log(item);
  return item;
};

module.exports = {
  create,
  getAll,
  getById,
  destroy,
  search,
};