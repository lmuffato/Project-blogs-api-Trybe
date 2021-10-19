const { newToken } = require('../middlewares/token');
const { Users } = require('../models');

const login = async (loginData) => {
  const { email, password } = loginData;

  const userData = await Users.findOne({
    where: { email },
  });

  console.log(userData);

  if (!userData || userData.password !== password) {
    return {
      code: 400,
      message: 'Invalid fields'
      ,
    };
  }

  const { password: _, ...userWithoutPassword } = userData;
  const token = newToken(userWithoutPassword);

  return token;
};

module.exports = login;