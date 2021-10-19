const rescue = require('express-rescue');
const loginService = require('../services/loginService');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await loginService({ email, password });

  if (result.code) return next(result);

  res.status(200).json({ token: result });
});

module.exports = {
  login,
};