const { User } = require('../models');
const { createToken } = require('../auth/createToken');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });  
  if (!user) return null;

  const token = createToken(user);
  return token;
};

const findAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  
  return user;
};

const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (!email || !password || !user || password !== user.password) { 
  return null;
  }
  const token = createToken(user);
  return token;
};

module.exports = { createUser, getUserByEmail, loginUser, findAllUsers };
