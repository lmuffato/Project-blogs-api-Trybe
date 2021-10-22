const userService = require('../services/login');

async function userLogin(req, res, _next) {
  const { status, message, data } = await userService.userLogin(req.body);
  if (message) res.status(status).json({ message });
  return res.status(status).json(data);
}

module.exports = { userLogin };