const rescue = require('express-rescue');
const { User } = require('../models'); 

const { userSchema } = require('../schema/userSchema');

const validationUser = rescue(async (req, _res, next) => {
  const { email } = req.body;
  const { error } = userSchema.validate(req.body);
  
  if (error) next({ message: error.details[0].message, status: 400 });

  const emailAlreadyExist = await User.findOne({ where: { email } });

  if (emailAlreadyExist) next({ message: 'User already registered', status: 409 });

  next();
});

module.exports = {
  validationUser,
};