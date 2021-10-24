const SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const messages = require('./messages');

const tokenValidate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(messages.user.get.tokenNotFound.status)
      .json({ message: messages.user.get.tokenNotFound.message });
  }
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch (_error) {
    return res
      .status(messages.user.get.invalidToken.status)
      .json({ message: messages.user.get.invalidToken.message });
  }
};

module.exports = { tokenValidate };
