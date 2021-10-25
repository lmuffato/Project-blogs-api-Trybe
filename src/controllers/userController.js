const {
  StatusCodes: { CREATED, OK, INTERNAL_SERVER_ERROR, NO_CONTENT },
} = require('http-status-codes');
const {
  create,
  listAllUsers,
  getUserById,
  remove,
} = require('../services/userService');
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
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const getEveryone = async (_req, res, next) => {
  try {
    const allUsers = await listAllUsers();
    return res.status(OK).json(allUsers);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneUser = await getUserById(id);
    return res.status(OK).json(oneUser);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const removeMySelf = async (req, res, next) => {
  try {
    const { id } = req.user.data;
    await remove(id);
    return res.status(NO_CONTENT).send();
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
  removeMySelf,
};
