const jwt = require('jsonwebtoken');
const { User } = require('../models');
const error = require('./error');
const auth = require('./auth');
require('dotenv');

const emailValidator = async (email) => {
  if (!email) return error.requiredEmail;
  const regex = await RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
  if (!regex) return error.invalidEmail;
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return error.emailAlreadyRegistered;
};

const createUser = async (userData) => {
  const { displayName, password, email } = userData;
  if (!password) return error.requiredPassword;
  if (displayName.length < 8) return error.shortDisplayName;
  if (password.length < 6) return error.shortPassword;
  const isEmailValid = await emailValidator(email);
  if (!isEmailValid) {
    const newUser = await User.create(userData);
    return newUser;
  } return isEmailValid;
};

const login = async ({ email, password }) => {
   const checkData = await auth.isInvalidLogin(email, password);
   if (checkData !== null) {
     return checkData;
   }
   const validUser = await User.findOne({ where: { email, password } });
   if (validUser) {
     const result = auth.generateToken(email, password);
     return result;
   }
   return error.invalidFields;
};

const getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

const getUserById = async (id) => {
  const result = await User.findByPk(id);
  if (!result) {
    return error.userDontExist;
  }
return result;
};

const deleteUser = async (authorization) => {
  if (!authorization) {
    return error.tokenNotFound;
  }
  const verifyToken = jwt.verify(authorization, process.env.JWT_SECRET);
  const { email } = verifyToken;
  const result = await User.destroy({ where: { email } });
  return result;
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
  deleteUser,
}; 