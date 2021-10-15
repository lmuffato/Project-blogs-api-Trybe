require('dotenv/config');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { Category } = require('../models');
const categoryValidation = require('../validations/category.validation');

exports.create = async ({ name, token }) => {
  const { error } = categoryValidation.validate({ name });
  if (error) return { code: StatusCodes.BAD_REQUEST, response: { message: error.message } };
  if (!token) return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Token not found' } };
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const category = await Category.create({ name });
    return { code: StatusCodes.CREATED, response: category.dataValues };
  } catch (e) {
    return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Expired or invalid token' } };
  }
};
exports.readAll = async ({ token }) => {
  if (!token) return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Token not found' } };
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const categories = await Category.findAll();
    return { code: StatusCodes.OK, response: categories };
  } catch (e) {
    return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Expired or invalid token' } };
  }
};