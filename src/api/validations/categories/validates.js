require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const {
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
} = require('../../status');

const validateName = (req, res, next) => {
  const { name } = req.body;
  const message = '"name" is required';

  if (!name || name === '') return res.status(HTTP_BAD_REQUEST).json({ message });

  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;
  const message = 'Token not found';

  if (!token) return res.status(HTTP_UNAUTHORIZED).json({ message });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.category = payload;
    next();
  } catch (e) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateName,
  validateToken,
};