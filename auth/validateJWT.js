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
      .json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user) {
      return res.status(UNAUTHORIZED)
        .json({ message: 'Expired or invalid token' });    
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};