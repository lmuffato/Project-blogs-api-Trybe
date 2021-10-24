const UserService = require('../services/user');

const create = async (req, res, next) => {
  const { displayName, email, password, image = null } = req.body;
  try {
    const { statusCode, token } = await UserService
      .create(displayName, email, password, image);
    res.status(statusCode).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { statusCode, token } = await UserService.login(email, password);
    res.status(statusCode).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const { statusCode, users } = await UserService.getAll();
    res.status(statusCode).json(users);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { statusCode, user } = await UserService.getById(id);
    res.status(statusCode).json(user);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    await UserService.destroy(token);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  destroy,
};