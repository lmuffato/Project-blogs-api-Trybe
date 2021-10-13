const { postUserValidate } = require('../schema/validationSchema');
const userServices = require('../services/userService');
const STATUS = require('../util/status');

const verifyPasswordMsgToAlter = (msg) => {
  const msgToCompare = '"password" length must be at least 6 characters long';
  const verify = msg === msgToCompare;
  const secondMsg = '"password" length must be 6 characters long';
  const toReturn = verify ? secondMsg : msg;
  return toReturn;
};

const verifyIfAlreadyExists = async (req, _res, next) => {
  const { email } = req.body;
  const users = await userServices.findByEmail(email);
  const long = users.length;
  if (long > 0) {
    return next({
      err: { message: 'User already registered' },
      statusCode: STATUS.STATUS_409_CONFLICT,
    });
  }
  next();
};

const validateUser = (req, _res, next) => {
  const { displayName, password, email, image } = req.body;
  const { error } = postUserValidate.validate({ displayName, password, email, image });
  if (error) {
    const msg = verifyPasswordMsgToAlter(error.details[0].message);
    return next({
      err: { message: msg },
      statusCode: STATUS.STATUS_400_BAD_REQUEST,
    });
  }
  next();
};

const verifyExistById = async (req, _res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.getById(id);
    if (!user) {
      return next({
        err: { message: 'User does not exist' },
        statusCode: STATUS.STATUS_404_NOT_FOUND,
      });
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validateUser,
  verifyIfAlreadyExists,
  verifyExistById,
};
