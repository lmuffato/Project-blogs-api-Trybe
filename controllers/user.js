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

async function getAllUsers(_req, res, _next) {
  const { status, message, data } = await userService.getAllUsers();
  if (message) {
    return res.status(status).json(message);
  }
  return res.status(status).json(data);
}

async function getById(req, res, _next) {
  const { status, message, data } = await userService.getById(req.params.id);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
}

module.exports = { createUser, getAllUsers, getById };