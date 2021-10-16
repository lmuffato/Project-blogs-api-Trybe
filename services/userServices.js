const { Users } = require('../models');
const { newToken } = require('../middleware/token');

const searchEmail = async (email) => {
  const search = await Users.findOne({ where: { email } });
  return search;
};
const createUser = async (user) => {
  const { email } = user;
  const emailFound = await searchEmail(email);
  if (emailFound) return 'exist';
  const { password, ...dataUser } = await Users.create(user);
  return newToken(dataUser);
};

module.exports = {
  createUser,
};
