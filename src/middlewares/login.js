const { status, message } = require('../messages');
const { User } = require('../models');

const checkEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(status.badRequest).json({ message: message.emailEmpty });
  }

  if (!email) {
    return res.status(status.badRequest).json({ message: message.emailRequired });
  }

  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(status.badRequest).json({ message: message.passwordEmpty });
  }

  if (!password) {
    return res.status(status.badRequest).json({ message: message.passwordRequired });
  }
  
  next();
};

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  const searchEmail = await User.findOne({ where: { email } });

  if (!searchEmail) {
    return res.status(status.badRequest).json({ message: message.fieldsEmpty });
  }
  
  next();
};

const validateLogin = [
  checkEmail,
  checkPassword,
  checkUserExist,
];

module.exports = { validateLogin };
