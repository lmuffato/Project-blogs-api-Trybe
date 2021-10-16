const {
  passwordIsRequired,
  passwordOtherThanSix,
  passwordCantBeEmpty,
} = require('../utils/errorMap');

const validatePassword = (req, _res, next) => {
  const { password } = req.body;
  
  if (typeof password === 'string' && password.length === 0) next(passwordCantBeEmpty.error);
  
  if (!password) next(passwordIsRequired.error);

  if (password.length !== 6) next(passwordOtherThanSix.error);

  next();
};

module.exports = { validatePassword };
