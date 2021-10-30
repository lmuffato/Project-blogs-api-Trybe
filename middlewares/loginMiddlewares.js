const jwt = require('jsonwebtoken');

const SECRET = 'segredo';

const {
  STATUS_BAD_REQUEST,
  STATUS_UNAUTHORIZED,
} = require('../utils/httpStatus');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const payload = jwt.verify(authorization, SECRET);
    req.user = payload;
    return next();
  } catch (_e) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

const verifyCredentialsLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (email === '') {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"email" is not allowed to be empty' });
  }
  if (password === '') {
    return res.status(STATUS_BAD_REQUEST)
    .json({ message: '"password" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"email" is required' });
  }
  if (!password) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"password" is required' });
  }

  next();
};

module.exports = {
  verifyToken,
  verifyCredentialsLogin,
};
