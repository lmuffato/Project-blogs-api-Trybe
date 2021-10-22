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

 async function findUsers(_req, res) {
    const { status, data, message } = await userService.findUsers();
    if (message) {
    return res.status(status).json(message);
    }
    return res.status(status).json(data);
}

async function findById(req, res) {
  const { status, data, message } = await userService.findById(req.params.id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(data);
}

module.exports = { createUser, findUsers, findById };
