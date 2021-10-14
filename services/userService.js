// const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const result = await User.create({ displayName, email, password, image });
  return result;
};

const findAll = async () => {
  const result = await User.findAll();
  return result;
};

const findById = async (id) => {
  const result = await User.findByPk(id);
  const { password: _, ...user } = result.dataValues;
  return user;
};

module.exports = {
  createUser,
  findAll,
  findById,
};