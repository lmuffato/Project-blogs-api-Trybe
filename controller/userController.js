const userServices = require('../services/userService');
const STATUS = require('../util/status');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userServices.create(displayName, email, password, image);
    return res.status(STATUS.STATUS_201_CREATED).json({ token });
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await userServices.getAll();
    return res.status(STATUS.STATUS_200_OK).json(users);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.getById(id);
    return res.status(STATUS.STATUS_200_OK).json(user);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
