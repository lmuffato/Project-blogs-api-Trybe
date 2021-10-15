const { User } = require('../../models');

const verifyNameLength = (displayName) => {
  if (displayName.length < 8) return true;
};

const verifyPassword = (password) => {
  if (password === undefined) return true;
};
const verifyPasswordLength = (password) => {
  if (password.length !== 6) return true;
};

const verifyEmail = (email) => {
  if (email === undefined) return true;
};
const verifyEmailFormat = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(String(email).toLowerCase())) return true;
};
const validateEmail = async (email) => {
  const checkEmail = await User.findOne({ where: { email } });
  if (checkEmail) return true;
};
const verifyEmailLength = (email) => {
  if (email === '') return true;
};

module.exports = {
  verifyNameLength,
  verifyPassword,
  verifyPasswordLength,
  verifyEmail,
  verifyEmailFormat,
  validateEmail,
  verifyEmailLength,
};