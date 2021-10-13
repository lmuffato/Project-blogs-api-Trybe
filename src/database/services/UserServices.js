const tokenGenerator = require('../../helpers/tokenGeneration');
const { User } = require('../models');

const createUser = async (userData) => {
  const { email } = userData;

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return {
      error: {
        code: 'conflict',
        message: 'User already registered',
      },
    };
  }

  await User.create(userData);

  const token = tokenGenerator(userData);

  return token;
};

const userLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return {
      error: {
        code: 'badRequest',
        message: 'Invalid fields',
      },
    };
  }

  const token = tokenGenerator({ email, password });

  return token;
};

module.exports = {
  createUser,
  userLogin,
};