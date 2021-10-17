const joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { category } = require('../models');
const util = require('../util');

const validateCategory = joi.object({
  name: joi.string().required(),
});

const jwtSecret = 'passwordNivelHard';

const createCategory = async (name, token) => {
  const { error } = validateCategory.validate({ name });

  if (error) {
    const { message } = error.details[0];
    throw util(message, 400);
  }

  if (!token) throw util('Token not found', 401);

  try {
    jwt.verify(token, jwtSecret);
  } catch (_err) {
    throw util('Expired or invalid token', 401);
  }

  const newCategory = await category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};
