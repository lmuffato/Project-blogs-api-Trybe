const jwt = require('jsonwebtoken');

const secret = 'eumoronojambalai';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const loginValidation = require('./validations/loginValidation');

const login = async (email, password) => {
  loginValidation.validateEmailRequired(email);
  loginValidation.validateEmailEmpty(email);
  loginValidation.validatePasswordRequired(password);
  loginValidation.validatePasswordEmpty(password);
  const result = await loginValidation.validateLogin(email, password);
  const token = jwt.sign({ data: result }, secret, jwtConfig);
  return { status: 200, response: { token } };
};

module.exports = {
  login,
};
