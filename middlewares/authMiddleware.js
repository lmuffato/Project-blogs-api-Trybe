require('dotenv').config();

const { verify } = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const Auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return next({ statusCode: 401, message: 'Token not found' });
    const userWithoutPassword = verify(authorization, JWT_SECRET);
    req.user = userWithoutPassword;
    next();
  } catch (e) {
    next({ message: 'Expired or invalid token', statusCode: 401 });
  }
};

module.exports = Auth;