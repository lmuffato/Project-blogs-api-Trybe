const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'missing auth token' });

    const { email } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ email });

    req.user = user;

    next();
  } catch (_e) {
    res.status(401).json({ message: 'jwt malformed' });
  }
};