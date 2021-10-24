const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const invalidLoginError = {
  status: 400,
  errorMessage: { message: 'Campos inválidos' },
};

const createToken = async (req, res) => {
  const { email, password } = req.body;
  const userPayload = await User.findOne({ where: { email, password } });
  if (!userPayload) {
    return res.status(invalidLoginError.status).json(invalidLoginError.errorMessage);
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ userPayload }, secret, jwtConfig);
  return res.status(200).json({ token });
};

const tokenAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, secret);
    return next();
  } catch (_e) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createToken,
  tokenAuth,
};
