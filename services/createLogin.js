const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { INVALID_FIELDS } = require('../utils/errorMessages');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const verifyIfUserExists = async (email, password) => {
  const checkUser = await User.findOne({ where: { email, password } });
  return checkUser;
};

const generateToken = (id, email, password) => {
  const token = jwt.sign({ data: { id, email, password } }, secret);
  return { token };
};

const getUserIdWithEmail = async (email) => {
  const { dataValues: { id } } = await User.findOne({ where: { email } });
  return id;
};

module.exports = async (email, password) => {
  const checkUser = await verifyIfUserExists(email, password);
  if (!checkUser) throw INVALID_FIELDS;
  const id = await getUserIdWithEmail(email);
  return generateToken(id, email, password);
};
