const Joi = require('joi');
const { 
  invalidEmail, 
  emailRequired, 
  nameRequired, 
  nameLength, 
  passwordLength, 
  passwordRequired
} = require('./errorsList');

const joiEmail = Joi.string().email().required();

const validEmail = (req, res, next) => {
  const { email } = req.body;
  const emailIsValid = joiEmail.validate(email);

  if (!email) return res.status(emailRequired.status).json(emailRequired.message);
  if (emailIsValid.error) return res.status(invalidEmail.status).json(invalidEmail.message);

  next();
};

const joiName = Joi.string().min(8).required();

const validName = (req, res, next) => {
  const { displayName } = req.body;
  const nameIsValid = joiName.validate(displayName);

  if (!displayName) return res.status(nameRequired.status).json(nameRequired.message);
  if (nameIsValid.error) return res.status(nameLength.status).json(nameLength.message);

  next();
};

const joiPassword = Joi.string().min(6).max(6).required();

const validPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordIsValid = joiPassword.validate(password);

  if (!password) return res.status(passwordRequired.status).json(passwordRequired.message);
  if (passwordIsValid.error) return res.status(passwordLength.status).json(passwordLength.message);

  next();
};

module.exports = {
  validEmail,
  validName,
  validPassword,
};
