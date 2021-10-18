const { Users } = require('../models');
const { token } = require('../middlewares/token');

const searchMail = async (email) => {
  const search = await Users.findOne({ where: { email } });
  return search;
};

const createUser = async (user) => {
  const { email } = user;
  const mail = await searchMail(email);
  if (mail) return 'exist';
  const { password, ...userData } = await Users.create(user);
  return token(userData);
};

const getUser = async () => {
  const users = await Users.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) return undefined;
  const { password, ...userData } = user.dataValues;
  return userData;
};

module.exports = {
  createUser,  
  searchMail,
  getUserById,
  getUser,
};
