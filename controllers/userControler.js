const userService = require('../services/userService');

async function createUser(req, res, next) {
  try {
    const { status, message, error } = await userService.createUser(req.body);
    if (error) {
    return res.status(status).json({ message: error });
    }
    return res.status(status).json({ message });
  } catch (error) {
      next({ status: 500, error });
  }
 }

module.exports = { createUser };
