const userService = require('../services/userService')

function createUser(req, res, _next) {
  const { status, message, error } = userService.createUser(req.body);
  if (error) {
    return res.status(status).json({ message: error.message });
  }
  return res.status(status).json({ message });
}

module.exports = { createUser };
