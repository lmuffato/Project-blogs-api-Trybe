const { create, listAllUsers, getUserById } = require('../services/userService');

const login = require('../services/loginService');

const register = async (req, res, next) => {
  try {
    const user = await create(req.body);
    if (user) return res.status(201).json({ token: user.token });
  } catch (e) {
    next(e);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const token = await login(req.body);
    res.status(200).json(token);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const allUsers = await listAllUsers();
    return res.status(200).json(allUsers);
  } catch (e) {
    next(e);
  }
};

const getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneUser = await getUserById(id);
    return res.status(200).json(oneUser);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  register,
  loginUser,
  getAll,
  getByID,
}; 