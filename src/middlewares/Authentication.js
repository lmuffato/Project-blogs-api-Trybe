require('dotenv').config();

const { StatusCodes: { UNAUTHORIZED } } = require('http-status-codes');
const { verify } = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const Auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return next({ statusCode: UNAUTHORIZED, message: 'Token not found' });
    const { userWithoutPassword } = verify(authorization, JWT_SECRET);
    res.user = userWithoutPassword;
    next();
  } catch (e) {
    next({ message: 'Expired or invalid token', statusCode: UNAUTHORIZED });
  }
};

module.exports = Auth;