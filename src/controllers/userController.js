const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const { create, listAllUsers, getUserById } = require('../services/userService');
const login = require('../services/loginService');

const createNewUser = async (req, res, next) => {
  try {
    const newUser = await create(req.body);
    if (newUser) return res.status(CREATED).json({ token: newUser.token });
  } catch (e) {
    next(e);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const token = await login(req.body);
    res.status(OK).json(token);
  } catch (e) {
    next(e);
  }
};

const getEveryone = async (_req, res, next) => {
  try {
    const allUsers = await listAllUsers();
    return res.status(OK).json(allUsers);
  } catch (e) {
    next(e);
  }
};

const getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneUser = await getUserById(id);
    return res.status(OK).json(oneUser);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
};