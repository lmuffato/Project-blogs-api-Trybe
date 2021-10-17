const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWTSECRET = process.env.JWT_SECRET;

const { Users, Categories } = require('../models');

const validateBodyCreateUsers = (body) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().required(),
  }).validate(body);
  if (error) return error;
  return false;
};

const validateAlreadyExistsUserByEmail = async (email) => {
  const user = await Users.findOne({ where: { email } });
  if (user) {
    const error = { message: 'User already registered', user: user.dataValues };
    return error;
  }
  return false;
};

const validateBodyLoginUsers = (body) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate(body);
  if (error) return error;
  return false;
};

const validateToken = (token) => {
  if (!token) return { numberStatus: 401, message: 'Token not found' };
  try {
    jwt.verify(token, JWTSECRET);
    return false;
  } catch (_err) {
    return { numberStatus: 401, message: 'Expired or invalid token' };
  }
};

const validateBodyCreateCategories = (body) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(body);
  if (error) return error;
  return false;
};

const validateBodyCreatePosts = (body) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).validate(body);
  if (error) return error;
  return false;
};

const validateByCategory = async (categoryIds) => {
  if (!categoryIds) return { numberStatus: 400, message: '"categoryIds" is required' };

  const getCategories = await Categories.findAll({ where: { id: categoryIds } });
  if (!getCategories.length || getCategories.length !== categoryIds.length) {
    return { numberStatus: 400, message: '"categoryIds" not found' };
  }
  return false;
};

module.exports = {
  validateBodyCreateUsers,
  validateAlreadyExistsUserByEmail,
  validateBodyLoginUsers,
  validateToken,
  validateBodyCreateCategories,
  validateBodyCreatePosts,
  validateByCategory,
};