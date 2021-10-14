require('dotenv/config');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const loginValidation = require('../validations/login.validation');

exports.login = async ({ email, password }) => {  
    const { error } = loginValidation.validate({ email, password });
    if (error) return { code: StatusCodes.BAD_REQUEST, response: { message: error.message } };
  const user = await User.findOne({ where: { email } });
  if (!user) return { code: StatusCodes.BAD_REQUEST, response: { message: 'Invalid fields' } };
  
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  return { code: StatusCodes.OK, response: { token } };
};
