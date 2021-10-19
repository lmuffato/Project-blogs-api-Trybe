const userService = require('../services/user');

async function createUser(req, res, _next) {
  try {
    const { status, message, error } = await userService.createUser(req.body);
    if (error) {
      return res.status(status).json({ message: error });
    }
    return res.status(status).json({ message });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { createUser };