const { newToken } = require('../middlewares/token');
const { User } = require('../models');

const login = async (loginData) => {
  const { email, password } = loginData;

  const userData = await User.findOne({
    where: { email },
  });

  if (!userData || userData.password !== password) {
    return {
      code: 400,
      message: 'Invalid fields',
    };
  }

  const { dataValues: { password: _, ...userWithoutPassword } } = userData;

  const token = newToken(userWithoutPassword);

  return token;
};

module.exports = login;