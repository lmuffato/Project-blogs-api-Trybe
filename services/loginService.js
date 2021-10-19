const { Users } = require('../models');

const login = async (email, password) => {
  const user = await Users.findOne({ where: { email, password } });

  if (!user) return { code: 400, message: 'Invalid fields' };

  const { password: _, ...userLogin } = user.dataValues;

  return userLogin;
};

module.exports = { login };