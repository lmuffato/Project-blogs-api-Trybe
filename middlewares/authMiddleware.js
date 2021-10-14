const jwt = require('jsonwebtoken');
// const { User } = require('../models');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'missing auth token' });
  }
  try {
    const { data } = jwt.verify(token, JWT_SECRET);
    req.user = data;
    return next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
