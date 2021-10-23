const jwt = require('jsonwebtoken');
const loginValidation = require('../validations/loginValidation');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (email, password) => {
  loginValidation.validateEmail(email);
  loginValidation.validatePassword(password);
  const user = await loginValidation.validateLogin(email, password);
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  return { status: 200, response: { token } };
};

module.exports = {
  login,
};
