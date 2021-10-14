const jwt = require('jsonwebtoken');
const { User } = require('../models');
const errorMessage = require('../utils/errorMessages');
require('dotenv/config');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const verifyIfUserExists = async (email, password) => {
  const checkUser = await User.findOne({ where: { email, password } });
  return checkUser;
};

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return { token };
};

module.exports = async (body) => {
  const { email, password } = body;
  const checkUser = await verifyIfUserExists(email, password);
  if (!checkUser) throw errorMessage.INVALID_FIELDS;
  const token = generateToken(body);
  return token;
};
