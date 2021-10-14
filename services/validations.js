const Joi = require('joi');

const { Users } = require('../models');

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
  const alreadyHaveUser = await Users.findOne({ where: { email } });
  if (alreadyHaveUser) {
    const error = { message: 'User already registered' };
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

module.exports = {
  validateBodyCreateUsers,
  validateAlreadyExistsUserByEmail,
  validateBodyLoginUsers,
};