const rescue = require('express-rescue');

const { loginSchema } = require('../schema/loginSchema');
const { User } = require('../models');

const validateLogin = rescue(async (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);
  console.log(error, 'ERROOOOOOOOOOR');
  if (error) next({ message: error.details[0].message, status: 400 });

  const { email } = req.body;
  const userExists = await User.findOne({ where: { email } });
  
  if (!userExists) {
    next({ message: 'Invalid fields', status: 400 });
  }
  next();
});

module.exports = {
  validateLogin,
};