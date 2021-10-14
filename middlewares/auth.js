const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const errorMessages = require('../utils/errorMessages');

module.exports = async (req, _res, next) => {
const token = req.headers.authorization;

if (!token) next(errorMessages.TOKEN_NOT_FOUND);

  try {
    jwt.verify(token, secret);
    next();
  } catch (e) {
    next(errorMessages.TOKEN_NOT_VALID);
  }
};