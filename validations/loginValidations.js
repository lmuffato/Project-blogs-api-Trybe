const { Users } = require('../models');
const CustomError = require('../utils/CustomError');

const validateLogin = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw new CustomError(400, 'Invalid fields');
  }
};

const validateEmail = (email) => {
  if (email === '') throw new CustomError(400, '"email" is not allowed to be empty');
  if (!email) throw new CustomError(400, '"email" is required');
};

const validatePassword = (password) => {
  if (password === '') throw new CustomError(400, '"password" is not allowed to be empty');
  if (!password) throw new CustomError(400, '"password" is required');
};

module.exports = {
  validateLogin,
  validateEmail,
  validatePassword,
};