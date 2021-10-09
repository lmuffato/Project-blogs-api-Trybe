const userServices = require('../services/userService');
const STATUS = require('../util/status');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userServices.create(displayName, email, password, image);
    return res.status(STATUS.STATUS_200_OK).json(user);
  } catch (e) {
    next(e);
  }
};

module.exports= {
  create,
};
