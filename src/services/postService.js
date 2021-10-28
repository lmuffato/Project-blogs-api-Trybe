const { Op } = require('sequelize');
const { Post, User, Category } = require('../../models');
const errors = require('../utils/errors');
const httpStatusCode = require('../utils/httpStatusCode');

const validateToken = require('../validations/token/validateToken');
const { 
  validatePostFields, validatePostUpdateFields } = require('../validations/post/validateFields');
const { validatePostDeleteFields } = require('../validations/post/validateFieldsDelete');

module.exports = {
  async createPost(token, title, content, categoryIds) {
    const decodedToken = validateToken(token);
    if (!decodedToken.id) return decodedToken;

    const validations = await validatePostFields(title, content, categoryIds);
    if (validations) return validations;

    try {
      const post = await Post.create({ userId: decodedToken.id, title, content });

      if (post) return { status: httpStatusCode.created, post };
    } catch (err) {
      console.log(err.message);
    }

    return {
      status: httpStatusCode.badRequest,
      message: 'nao foi possivel criar',
    };
  },

  async updatePost(token, id, post) {
    const decodedToken = validateToken(token);
    if (!decodedToken.id) return decodedToken;

    const validations = await validatePostUpdateFields(post, id, decodedToken.id);

    if (validations) return validations;

    try {
      await Post.update(post, { where: { id } });

      const updatedPost = await Post.findOne({ where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] });

      return { status: httpStatusCode.ok, updatedPost };
    } catch (err) {
      return {
        status: httpStatusCode.badRequest,
        message: err.message,
      };
    }
  },

  async show(token, id) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    if (id) {
      const post = await Post.findByPk(id, {
        include: [
          { model: User, as: 'user', attributes: { exclude: 'password' } },
          { model: Category, as: 'categories', through: { attributes: [] } }] });

      if (!post) {
        return { status: httpStatusCode.notFound, message: errors.postNotExistError };
      }

      return { status: httpStatusCode.ok, post };
    }
  },

  async index(token, searchTerm) {
    const decodedToken = validateToken(token);
    if (!decodedToken.id) return decodedToken;

    console.log({ searchTerm });

    const findParams = searchTerm
      ? { where: { [Op.or]: [{ title: searchTerm }, { content: searchTerm }] } }
      : {};
  
    const allPosts = await Post.findAll({
      ...findParams,
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return {
      status: httpStatusCode.ok,
      allPosts,
    };
  },

  async deletePost(token, id) {
    const decodedToken = validateToken(token);
    if (!decodedToken.id) return decodedToken;

    const validations = await validatePostDeleteFields(id, decodedToken.id);
    if (validations) return validations;

    try {
      await Post.destroy({ where: { id } });
      
      return {
        status: httpStatusCode.notContent,
      };
    } catch (err) {
      return {
        status: httpStatusCode.badRequest,
        message: err.message,
      };
    }
  },
};
