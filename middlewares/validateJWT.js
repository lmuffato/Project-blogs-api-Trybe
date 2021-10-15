const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
  return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;