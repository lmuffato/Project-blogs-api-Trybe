const { User } = require('../../models');
const messages = require('./messages');

const REGEX_EMAIL = /\S+@\S+\.\S+/;

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(messages.user.email.required.status)
      .json({ message: messages.user.email.required.message });
  }
  if (!REGEX_EMAIL.test(email)) {
    return res.status(messages.user.email.valid.status)
    .json({ message: messages.user.email.valid.message });
  }
  next();
};

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const exists = await User.findOne({ where: { email } });
  if (exists) {
    return res.status(messages.user.email.exists.status)
      .json({ message: messages.user.email.exists.message });
  }
  next();
};

module.exports = { emailValidate, emailExists };
