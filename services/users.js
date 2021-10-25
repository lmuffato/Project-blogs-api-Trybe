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

const getUsers = async () => {
  const allUsers = await User.findAll({ attributes: {
    exclude: ['password'],
  } });
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  // console.log(user);
  if (!user) {
    return {
      errorCode: 404,
      errorInfo: { message: 'User does not exist' },
    };
  }
  return user;
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  // getUserByEmail,
};
