const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWTsecret = process.env.JWT_SECRET;

function validateJWT(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { email } = jwt.verify(token, JWTsecret);
    req.email = email;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
}

module.exports = {
  validateJWT,
};