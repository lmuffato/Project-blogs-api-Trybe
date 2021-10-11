const jwt = require('jsonwebtoken');
const STATUS = require('../util/status');
require('dotenv').config();

const { env: { SECRET } } = process;

const verifyToken = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next({
        err: { message: 'jwt malformed' },
        statusCode: STATUS.STATUS_401_UNAUTHORIZED,
      });
    }
    const decodedInfo = jwt.verify(token, SECRET);
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
