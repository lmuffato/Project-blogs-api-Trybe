const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');
const { User } = require('../models');

const nameValidate = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.nameLength });
  }

  next();
};

const emailValidate = async (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;

  if (!email) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.noEmail });
  }

  if (email === '') {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.emptyEmail });
  }

  if (regexEmail.test(email) === false) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.invalidEmail });
  }

  const emailExists = await User.findOne({ where: { email } });
  if (emailExists !== null) {
    return res.status(httpStatus.conflict).json({ message: errorMessages.userExists });
  }

  next();
};

const emailValidate2 = async (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  
  if (email === '') {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.emptyEmail });
  }
  
  if (!email) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.noEmail });
  }

  if (regexEmail.test(email) === false) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.invalidEmail });
  }

  const emailExists = await User.findOne({ where: { email } });
  if (emailExists === null) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.invalidFields });
  }

  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.emptyPassword });
  }

  if (!password) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.noPassword });
  }

  if (password.length !== 6) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.passwordLength });
  }

  next();
};

const userIdExist = async (req, res, next) => {
  const userId = req.params.id;
  const userById = await User.findOne({ where: { id: userId } });

  if (!userById) {
    return res.status(httpStatus.notFound).json({ message: errorMessages.userNotExists });
  }

  next();
};

const validateCategory = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(httpStatus.badRequest).json({ message: errorMessages.nameRequired });
  }

  next();
};

module.exports = {
  nameValidate,
  emailValidate,
  emailValidate2,
  passwordValidate,
  userIdExist,
  validateCategory,
};
