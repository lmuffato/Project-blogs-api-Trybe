const { CONFLICT, BAD_REQUEST } = require('http-status-codes');
const { User } = require('../models');
const { userSchema } = require('../validations/schema');

const validUser = async (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  console.log('📓 ~ file: user.js ~ line 7 ~ validUser ~ error', error);
  if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
  const emailAlreadyExists = await User.findOne({ where: { email: req.body.email } });
  if (emailAlreadyExists) return next({ statusCode: CONFLICT, message: 'User already registered' });
next();
};

module.exports = {
  validUser,
};