const { CREATED, OK } = require('http-status-codes');
const create = require('../services/userService');
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

module.exports = {
  createNewUser,
  loginUser,
};