const jwt = require('jsonwebtoken');
const ERROR = require('../helpers/errors');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const { message, code } = ERROR.TOKEN_NOT_FOUND;
    return res.status(code).json({ message });
  }

  try {
    const validToken = jwt.verify(token, process.env.JWT_SECRET);
    res.user = validToken;
    next();
  } catch (error) {
    const { message, code } = ERROR.TOKEN_EXPIRED;
    res.status(code).json({ message });
  }
};

module.exports = {
  verifyToken,
};
