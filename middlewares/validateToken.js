const jwt = require('jsonwebtoken');
const httpStatus = require('../utils/httpStatus');
const errorCodes = require('../utils/errorCodes');

require('dotenv').config();

const SECRET_PASSWORD = process.env.SECRET_TOKEN || 'mySuperMegaSecretToken';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json(errorCodes.errorToken);
  }

  try {
    const decoded = await jwt.verify(token, SECRET_PASSWORD);
    
    req.user = decoded.data;

    next();
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).json(errorCodes.errorTokenInvalid);
  }
};

module.exports = validateToken;
