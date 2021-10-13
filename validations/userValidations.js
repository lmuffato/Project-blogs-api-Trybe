const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST, CONFLICT } } = require('http-status-codes');
const { userSchema } = require('../schemas/userSchema');
const { User } = require('../models');

const validateUser = rescue(async (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  const { email } = req.body;

  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });

  const emailAlreadyExists = await User.findOne({ where: { email } });
  if (emailAlreadyExists) {
    return next({ message: 'User already registered', statusCode: CONFLICT });
  }
  
  next();
});

module.exports = validateUser;