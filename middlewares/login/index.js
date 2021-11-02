const messages = require('./messages');
const { User } = require('../../models');

const emailValidate = (email) => {
  if (email === undefined) {
    return {
      status: messages.login.email.required.status,
      message: messages.login.email.required.message,
    };
  }
  if (email.length === 0) {
    return {
      status: messages.login.email.empty.status,
      message: messages.login.email.empty.message,
    };
  }
};

const passValidate = (pass) => {
  if (pass === undefined) {
    return {
      status: messages.login.password.required.status,
      message: messages.login.password.required.message,
    };
  }
  if (pass.length === 0) {
    return {
      status: messages.login.password.empty.status,
      message: messages.login.password.empty.message,
    };
  }
};

const userExists = async (email, password) => {
  const exists = await User.findOne({ where: { email, password } });
  if (!exists) {
    return {
      status: messages.login.notExists.status,
      message: messages.login.notExists.message,
    };
  }
};

const loginValidate = async (req, res, next) => {
  const { email, password } = req.body;
  const passvalidation = passValidate(password);
  const emailvalidation = emailValidate(email);
  if (emailvalidation) {
    return res.status(emailvalidation.status)
    .json({ message: emailvalidation.message });
  }
  if (passvalidation) {
    return res.status(passvalidation.status)
    .json({ message: passvalidation.message });
  }
  const userexists = await userExists(email, password);
  if (userexists) {
    return res.status(userexists.status)
      .json({ message: userexists.message });
  }
  next();
};

module.exports = { loginValidate };
