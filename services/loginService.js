const jwt = require('jsonwebtoken');
const validations = require('../validations/loginValidations');
const { Users } = require('../models');

const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const loginUser = async (email, password) => {
  console.log('entreii');
  validations.validateEmail(email);
  validations.validatePassword(password);
  await validations.validateLogin(email, password);

  const { password: passDB, ...userInformation } = await Users.findOne({ where: { email } });
  const token = jwt.sign({ data: userInformation }, process.env.JWT_SECRET, jwtConfig);

  return ({ status: 200, message: token });
};

module.exports = {
  loginUser,
};