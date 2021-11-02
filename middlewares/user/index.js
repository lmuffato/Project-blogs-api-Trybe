const MIN_NAME = 8;
const messages = require('./messages');

const nameValidate = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < MIN_NAME) {
    return res.status(messages.user.valid.status).json({ message: messages.user.valid.message });
  }
  next();
};

module.exports = { nameValidate };
