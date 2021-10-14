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

module.exports = {
  createUser,
};