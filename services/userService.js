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

module.exports = {
  createUser,  
};