const { Users } = require('../models');
const {
  genToken,
} = require('../ultilities/genToken');

const createUser = async (data) => {
  const newUser = await Users.create(data);
  const { email } = newUser;
  const token = await genToken(email);
  return { token };
};

const findUsers = async () => {
  const finded = await Users.findAll();
  return finded;
};

const findById = async (id) => {
  const findId = await Users.findByPk(id);
  return findId;
};

module.exports = {
  createUser,
  findUsers,
  findById,
};