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
  const token = jwt.sign({ data: body.email }, secret, jwtConfig);

  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return { code: 404, message: 'User does not exist' };
  return user;
};

const deleteUser = async (userId) => User.destroy({ where: { id: userId } });

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};