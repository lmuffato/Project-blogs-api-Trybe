const jwt = require('jsonwebtoken');

const secret = 'secrettoken';

async function createToken(user) {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  const token = await jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

async function validateJWTToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = await jwt.verify(authorization, secret);

    req.user = decoded.data;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = {
  createToken,
  validateJWTToken,
};
