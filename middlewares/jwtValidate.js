const jwt = require('jsonwebtoken');
const STATUS = require('../util/status');
require('dotenv').config();

const secret = process.env.JWT_SECRET || '123456';

const verifyToken = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedInfo = jwt.verify(token, secret);
    req.userId = decodedInfo.data.id;
    next();
  } catch (e) {
    next({
      err: { message: 'Expired or invalid token' },
      statusCode: STATUS.STATUS_401_UNAUTHORIZED,
    });
  }
};

const existsToken = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      err: { message: 'Token not found' },
      statusCode: STATUS.STATUS_401_UNAUTHORIZED,
    });
  }
  next();
};

module.exports = {
  verifyToken,
  existsToken,
};
