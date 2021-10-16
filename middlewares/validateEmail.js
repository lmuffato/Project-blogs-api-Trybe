const { emailIsRequired, emailMustBeValid, emailCantBeEmpty } = require('../utils/errorMap');

const validateEmail = (req, _res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;

  if (typeof email === 'string' && email.length === 0) next(emailCantBeEmpty.error);

  if (!email) next(emailIsRequired.error);
  
  if (!regex.test(email)) next(emailMustBeValid.error);

  next();
};

module.exports = { validateEmail };