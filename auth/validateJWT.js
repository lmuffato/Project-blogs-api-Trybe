const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.SECRET_JWT || 'notsecretanymore';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(authorization, JWT_SECRET);
    req.user = decoded.data;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
