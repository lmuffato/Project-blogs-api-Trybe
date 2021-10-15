require('dotenv/config');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { User, BlogPost, Category } = require('../models');
const postValidation = require('../validations/post.validation');

exports.create = async ({ title, content, categoryIds, token }) => {
  const { error } = postValidation.validate({ title, content, categoryIds });
  if (error) return { code: StatusCodes.BAD_REQUEST, response: { message: error.message } };
  if (!token) return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Token not found' } };
  const response = await Promise.all(categoryIds.map((id) => Category.findOne({ where: { id } })));
  if (response.some((element) => element === null)) {
    return { code: StatusCodes.BAD_REQUEST, response: { message: '"categoryIds" not found' } };
  }
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const { dataValues: { id: userId } } = await User.findOne({ where: { email } });
    const blogPost = await BlogPost.create({ title, content, categoryIds, userId });
    return { code: StatusCodes.CREATED, response: blogPost.dataValues };
  } catch (e) {
    return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Expired or invalid token' } };
  }
};
exports.readAll = async ({ token }) => {
  if (!token) return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Token not found' } };
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const blogPosts = await BlogPost.findAll({ include: [{ all: true }] });  
    return { code: StatusCodes.OK, response: blogPosts };
  } catch (e) {
    return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Expired or invalid token' } };
  }
};
