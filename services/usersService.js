const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const validations = require('../validations/validations');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const createUser = async (email, password, displayName, image) => {
  validations.validateDisplayName(displayName);
  validations.validateEmail(email);
  validations.validatePassword(password);
  const user = await Users.findOne({ where: { email } });
  
  validations.validateUniqueUser(user);

  const { dataValues } = await Users.create({ email, password, displayName, image });
  const { password: passDB, ...userInformation } = dataValues;
  const token = jwt
    .sign({ data: userInformation }, process.env.JWT_SECRET, jwtConfig);

  return ({ status: 201, message: token });
};

module.exports = {
  createUser,
};
