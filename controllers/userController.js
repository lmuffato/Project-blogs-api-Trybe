const rescue = require('express-rescue');
const userServices = require('../services/userServices');
const authServices = require('../services/auth');

const createUser = rescue(async (req, res, next) => {
  const result = await userServices.createUser(req.body);
  if (result.status) return next(result);
  return res.status(201).json(result);
});

const login = rescue(async (req, res, next) => {
  const result = await userServices.login(req.body);
  if (result.status) return next(result);
  res.status(200).json(result);
});

const getAllUsers = rescue(async (req, res, _next) => {
  const { authorization } = req.headers;
  const loggedIn = await authServices.validateJWT(authorization);
  if (loggedIn) {
    const result = await userServices.getAllUsers();
    res.status(200).json(result);
  }
});

const getUserById = rescue(async (req, res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const loggedIn = await authServices.validateJWT(authorization);
  if (loggedIn) {
    const result = await userServices.getUserById(id);
    if (result.status) return next(result);
    res.status(200).json(result);
  }
});

const deleteUser = rescue(async (req, res, next) => {
  const { authorization } = req.headers;
    const result = await userServices.deleteUser(authorization);
    if (result.status) return next(result);
    res.status(204).json(result);
});

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
  deleteUser,
}; 