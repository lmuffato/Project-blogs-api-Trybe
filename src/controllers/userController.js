const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const { create, listAllUsers } = require('../services/userService');
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
    // console.log('📓 ~ file: userController.js ~ line 26 ~ getEveryone ~ allUsers', allUsers);
    return res.status(OK).json(allUsers);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
};