require('dotenv/config');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userValidation = require('../validations/user.validation');

exports.create = async ({ displayName, email, password, image }) => {
  const { error } = userValidation.validate({ displayName, email, password, image });
  if (error) return { code: StatusCodes.BAD_REQUEST, response: { message: error.message } };

  const user = await User.findOne({ where: { email } });
  if (user) return { code: StatusCodes.CONFLICT, response: { message: 'User already registered' } };

  await User.create({ displayName, email, password, image });
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  return { code: StatusCodes.CREATED, response: { token } };
};
exports.readAll = async ({ token }) => {
  if (!token) return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Token not found' } };
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const users = await User.findAll();
    return { code: StatusCodes.OK, response: users };
  } catch (e) {
    return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Expired or invalid token' } };
  }
};
exports.readOne = async ({ token, id }) => {
  if (!token) return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Token not found' } };
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return { code: StatusCodes.NOT_FOUND, response: { message: 'User does not exist' } }; 
    } 
    return { code: StatusCodes.OK, response: user.dataValues };
  } catch (e) {
    return { code: StatusCodes.UNAUTHORIZED, response: { message: 'Expired or invalid token' } };
  }
};
