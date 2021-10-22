const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const CustomError = require('../utils/CustomError');
const validations = require('../validations/userValidations');
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

const findUser = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) throw new CustomError(404, 'User does not exist');
  return ({ status: 200, message: user });
};

module.exports = {
  createUser,
  findUser,
};
