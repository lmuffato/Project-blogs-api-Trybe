const Joi = require('joi');
const { User } = require('../models');
require('dotenv').config();

const validations = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().length(6),
  image: Joi.string(),
});

const createUser = async (data) => {
  const { error } = validations.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  const { email } = data;
  const findUser = await User.findOne({ where: { email } });
  if (findUser) return { status: 409, message: 'User already registered' };
  await User.create(data);
  return { status: 201, message: 'User created' };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };
  return { status: 200, data: user };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return { status: 200, data: users };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};