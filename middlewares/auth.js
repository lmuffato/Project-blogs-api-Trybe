const jwt = require('jsonwebtoken');
const { secret } = require('../utils/jwtConfig');

const auth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, secret);
    return next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;