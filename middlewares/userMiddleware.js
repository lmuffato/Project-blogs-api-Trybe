const { User } = require('../models');
const { userValidate } = require('../validateJOI/validateUserJoi');

const validUser = async (req, _res, next) => {
  const { error } = userValidate.validate(req.body);

  if (error) return next({ statusCode: 400, message: error.message });
  const emailAlreadyExists = await User.findOne({ where: { email: req.body.email } });
  if (emailAlreadyExists) return next({ statusCode: 409, message: 'User already registered' });
  console.log('alou');
next();
};

module.exports = { validUser };
