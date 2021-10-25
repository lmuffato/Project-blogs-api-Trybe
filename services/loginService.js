const { User } = require('../models');

const loginUserS = async (email, password) => {
  const tryLogin = await User.findOne({ where: { email, password } });
  return tryLogin;
};

module.exports = {
  loginUserS,
};