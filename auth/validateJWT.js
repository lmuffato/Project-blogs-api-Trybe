const jwt = require('jsonwebtoken');

const { StatusCodes: { UNAUTHORIZED } } = require('http-status-codes');

const {
  User,
} = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

  if (!token) {
    return res.status(UNAUTHORIZED)
      .json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findAll({ where: { email: decoded.email } });
    if (!user) {
      return res.status(UNAUTHORIZED)
        .json({ message: 'jwt malformed' });    
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: err.message });
  }
};