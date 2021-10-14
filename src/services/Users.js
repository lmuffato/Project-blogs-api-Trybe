const Joi = require('joi');
const { User } = require('../models');
const { generateToken } = require('./Authenticate');
require('dotenv').config();

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().allow('').optional(),
});

const create = async (displayName, email, password, image) => {
  const { error, value } = userSchema.validate({ displayName, email, password, image });
  
  if (error) return { status: 400, message: error.message };

  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) return { status: 409, message: 'User already registered' };

  const createdUser = await User.create(value);

  const token = generateToken(createdUser);

  return { status: 201, result: { token } };
};

const findAll = async () => {
  const result = await User.findAll();

  return { result };
};

const findOne = async (id) => {
  const foundUser = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!foundUser) return { status: 404, message: 'User does not exist' };
  
  const result = foundUser.dataValues;
  
  return { status: 200, result };
};

module.exports = {
  create,
  findAll,
  findOne,
};
