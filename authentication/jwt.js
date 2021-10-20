const jwt = require('jsonwebtoken');

const HTTP_UNAUTHORIZED = 401;

const secret = 'token';
const TOKEN_NOT_FOUND = 'Token not found';
const INVALID_TOKEN = 'Expired or invalid token';

async function createToken(user) {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

const validToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: TOKEN_NOT_FOUND });
  }
  try {
    const decoded = await jwt.verify(authorization, secret);
    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: INVALID_TOKEN });
  }
};

module.exports = {
  createToken,
  validToken,
};
