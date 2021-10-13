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

module.exports = {
  createUser,
  findAll,
};