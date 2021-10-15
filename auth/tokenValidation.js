// feito com base no mesmo validador do projeto cookmaster.

const jwt = require('jsonwebtoken');
require('dotenv').config();
const {
  ERROR_TOKEN,
  ERROR_JWT,
} = require('../utils/errors');

const SECRET = process.env.SECRET || 'meusupersegredo';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(ERROR_TOKEN.error.status).json({ message: ERROR_TOKEN.error.message });
  }
  try {
    const payload = jwt.verify(token, SECRET);
    // console.log(payload);
    req.payload = payload;
    return next();
  } catch (error) {
    res.status(ERROR_JWT.error.status).json({ message: ERROR_JWT.error.message });
  }
};

module.exports = authMiddleware;
