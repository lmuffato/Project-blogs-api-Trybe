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

const userLogin = async (dataLogin) => {
  const { email } = dataLogin;
  const emailFound = await searchEmail(email);
  if (emailFound === null) return null;
  
  return newToken(dataLogin);
};

module.exports = {
  createUser,
  userLogin,
};
