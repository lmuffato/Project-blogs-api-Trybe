const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const userLogin = await loginService.login(email, password);

  if (userLogin.code) return next(userLogin);

  const token = jwt.sign(userLogin, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = { login };