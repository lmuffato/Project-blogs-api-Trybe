const { Users } = require('../models');

const loginUser = async (email, password) => {
  const user = await Users.findOne({ where: { email, password } });
  
  if (!user) return { code: 400, message: 'Invalid fields' };

  const { password: _, ...login } = user.dataValues;

  return login;
};

module.exports = {
  loginUser,
};
