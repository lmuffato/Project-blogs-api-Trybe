const MIN_PASSWORD_LENGTH = 6;
const messages = require('./messages');

const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(messages.user.password.required.status)
      .json({ message: messages.user.password.required.message });
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return res.status(messages.user.password.valid.status)
      .json({ message: messages.user.password.valid.message });
  }
  next();
};

module.exports = { passwordValidate };
