require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

const authValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'missing auth token' });

  try {
    const { email } = jwt.verify(token, SECRET);
    const user = await User.findUserEmail(email);
    req.user = user;
    next();
  } catch (_e) {
    res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  authValidation,
};