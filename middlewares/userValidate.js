const { postUserValidate } = require('../schema/validationSchema');
const STATUS = require('../util/status');

const verifyPasswordMsgToAlter = (msg) => {
  const msgToCompare = '"password" length must be at least 6 characters long'
  const verify = msg === msgToCompare;
  const secondMsg = '"password" length must be 6 characters long'
  const toReturn = verify ? secondMsg : msg;
  return toReturn;
};

const validateUser = (req, _res, next) => {
  const { displayName, password, email, image } = req.body;
  const { error } = postUserValidate.validate({ displayName, password, email, image });
  if(error) {
    const msg = verifyPasswordMsgToAlter(error.details[0].message)
    return next({
      err: { message: msg},
      statusCode: STATUS.STATUS_400_BAD_REQUEST,
    });
  }
  next();
};

module.exports = {
  validateUser,
};
