const jwt = require('jsonwebtoken');
const loginValidation = require('../validations/loginValidation');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (email, password) => {
  loginValidation.validateEmail(email);
  loginValidation.validatePassword(password);
  await loginValidation.validateLogin(email, password);
  const token = jwt.sign({ email }, process.env.JWT_SECRET, jwtConfig);
  return { status: 200, response: { token } };
};

module.exports = {
  login,
};
