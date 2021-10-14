const { User } = require('../models');
const { createToken } = require('../auth/createToken');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user);
  
  if (!user) return null;

  const token = createToken(user);
  return token;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  return user;
};

module.exports = { createUser, getUserByEmail };
