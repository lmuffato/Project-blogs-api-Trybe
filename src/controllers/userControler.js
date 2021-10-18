const userService = require('../services/userService');
const tokenFcts = require('../utils/jsonWebToken');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser(displayName, email, password, image);
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userService.login(email, password);
  return res.status(200).json({ token });
};

const getAll = async (_req, res) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  tokenFcts.verifyToken(token);
  return next();
};

module.exports = {
  createUser,
  login,
  getAll,
  validateToken,
};