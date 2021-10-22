const jwt = require('jsonwebtoken');
const helpers = require('../helpers/functionsHelpers');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  const credentials = {
    email,
  };

  const token = await jwt.sign(credentials, secret);
  console.log('console.log do token', token);
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

const getUsers = async (token) => {
  const verifyTokenValidity = await helpers.verifyTokenValid(token, secret);

  if (verifyTokenValidity.errorCode) return verifyTokenValidity;

  const allUsers = await User.findAll();
  return allUsers;
};

const getUserByEmail = async (email) => {
 const user = await User.findOne({ where: { email } });
 return user;
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserByEmail,
};
