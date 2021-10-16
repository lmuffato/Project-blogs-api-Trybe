// const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { User } = require('../models');
const createToken = require('../token/createToken');

const createUser = async (user) => {
  const result = await User.create(user);
  const { id, displayName, email } = result;
  const token = createToken({ id, displayName, email });

  return { token };
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