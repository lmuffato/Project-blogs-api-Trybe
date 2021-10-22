const jwt = require('jsonwebtoken');
require('dotenv').config();
// const helpers = require('../helpers/functionsHelpers');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  const credentials = {
    email,
  };

  const token = jwt.sign(credentials, secret);
  await User.create({ displayName, email, password, image });

  return token;
};

const loginUser = async (email) => {
  const credentials = {
    email,
  };
  
  const token = await jwt.sign(credentials, secret);

  return token;
};

const getUsers = async (_token) => {
  // const verifyTokenValidity = await helpers.verifyTokenValid(token, secret);

  // if (verifyTokenValidity.errorCode) return verifyTokenValidity;

  const allUsers = await User.findAll();
  return allUsers;
};

// const getUserByEmail = async (email) => {
//  const user = await User.findAll({ where: { email } });
//  console.log(user);
//  return user;
// };

module.exports = {
  createUser,
  loginUser,
  getUsers,
  // getUserByEmail,
};
