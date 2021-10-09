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

module.exports = {
  create,
};
