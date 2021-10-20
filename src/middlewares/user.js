const { status, message } = require('../messages');
const { User } = require('../models');

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  const MINLENGTH = 8;

  if (+displayName.length < MINLENGTH) {
    return res.status(status.badRequest).json({ message: message.displayNameShort });
  }

  next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

  if (!email) {
    return res.status(status.badRequest).json({ message: message.emailRequired });
  }

  if (!emailRegex) {
    return res.status(status.badRequest).json({ message: message.emailNotValid });
  }

  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  const MINLENGTH = 6;

  if (!password) {
    return res.status(status.badRequest).json({ message: message.passwordRequired });
  }

  if (+password.length < MINLENGTH) {
    return res.status(status.badRequest).json({ message: message.passwordShort });
  }

  next();
};

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  const searchEmail = await User.findOne({ where: { email } });

  if (searchEmail) {
    return res.status(status.conflict).json({ message: message.userExist });
  }
  
  next();
};

const validate = [
  checkDisplayName,
  checkEmail,
  checkPassword,
  checkUserExist,
];

module.exports = { validate };
