const { Op } = require('sequelize');
const ERROR = require('../helpers/errors');
const { BlogPost, User, Category } = require('../models');
const getUserId = require('../helpers/jwt');

const checkCategories = async (categoryIds) => {
  const hasAllCategories = await User.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (hasAllCategories.length === categoryIds.length) return true;
  return false;
};

const validations = async ({ title, content, categoryIds }) => {
  if (!title) return ERROR.TITLE_IS_REQUIRED;
  if (!content) return ERROR.CONTENT_IS_REQUIRED;
  if (!!categoryIds === false) return ERROR.CATEGORYIDS_IS_REQUIRED;
  const hasAllCategories = await checkCategories(categoryIds);
  if (!hasAllCategories) return ERROR.CATEGORYIDS_NOT_FOUND;
  return false;
};

const create = async ({ title, content, categoryIds, token }) => {
  const userId = await getUserId(token);
  const isInvalid = await validations({ title, content, categoryIds });
  if (isInvalid) return isInvalid;
  await BlogPost.create({ title, content, userId });
  const post = await BlogPost.findOne({ where: { title, content, userId } });
  return { post, code: 201 };
};

const getPosts = async () => {
  let posts = await BlogPost.findAll({ include: [{ all: true }] });
  if (!posts) posts = [];
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne(
    {
      where: { id },
      include: [
        {
          model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
          model: Category, as: 'categories', through: { attributes: [] },
        },
      ],
    },
  );
  if (!post) return ERROR.POST_NOT_FOUND;
  return post;
};

const deleteById = async (id, token) => {
  const post = await getPostById(id);
  if (!post.dataValues) return ERROR.POST_NOT_FOUND;
  const userId = await getUserId(token);
  if (post.userId !== userId) return ERROR.UNAUTHORIZED;
  const deletedPost = await BlogPost.destroy({ where: { id } });
  return deletedPost;
};

// Fiz essa questão estudando um pouco do código do Iago, disponível no link abaixo:
// https://github.com/tryber/sd-010-a-project-blogs-api/blob/iagopferreira-sd-010-a-project-blogs-api/services/postService.js
const searchPost = async (query) => {
  const allPosts = await BlogPost.findAll({
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
  if (!allPosts) return ERROR.POST_NOT_FOUND;
  return allPosts;
};

module.exports = {
  create,
  getPosts,
  getPostById,
  deleteById,
  searchPost,
};
