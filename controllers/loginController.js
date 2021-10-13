const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const loginUser = await loginService.loginUser(email, password);
  
  if (loginUser.code) return next(loginUser);

  const token = jwt.sign(loginUser, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
