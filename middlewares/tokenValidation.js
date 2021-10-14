const { verify } = require('jsonwebtoken');
const { STATUS_UNAUTHORIZED, MSG_TOKEN_NOT_FOUND, MSG_TOKEN_EXPIRED } = require('../utils/msg');

const secret = process.env.JWT_SECRET || 'mysecret';

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_TOKEN_NOT_FOUND });
  }
  try {
    const decode = verify(token, secret);
    req.user = decode.data.username;
    return next();
  } catch (error) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_TOKEN_EXPIRED });
  }
};

module.exports = tokenValidation;