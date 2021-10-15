const { User } = require('../models');
const { validations } = require('../services/userService');

const userCheckEmailExists = (req, _res, next) => {
  const { error } = validations.validate(req.body);
  if (error) return next({ status: 400, message: error.message });
  const findEmail = User.findOne({ where: { email: req.body.email } });
  if (findEmail) return next({ status: 409, message: 'Email already exists' });
  next();
};

module.exports = { userCheckEmailExists };