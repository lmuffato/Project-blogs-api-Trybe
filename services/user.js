const jwt = require('jsonwebtoken');
const { User } = require('../models');
const Joi = require('../Joi/templates');
const { jwtConfig, secret } = require('../utils/jwtConfig');

const findUserByEmail = async (email) => {
  const user = await User.findOne((
    { where: { email } }
  ));
  return user;
};

const createUser = async (body) => {
  const { error } = Joi.User.validate(body);
  if (error) return { code: 400, message: error.details[0].message };

  const userAlreadyExists = await findUserByEmail(body.email);

  if (userAlreadyExists) return { code: 409, message: 'User already registered' };

  await User.create(body);
  const token = jwt.sign({ data: body }, secret, jwtConfig);
  
  return token;
};

module.exports = {
  createUser,
};