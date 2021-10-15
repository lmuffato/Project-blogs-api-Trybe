require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  return jwt.verify(token, secret, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return next();
  });
};

module.exports = validateJWT;