const { postLoginValidate } = require('../schema/validationSchema');
const loginService = require('../services/loginService');
const STATUS = require('../util/status');

const validateLogin = (req, _res, next) => {
  const { password, email } = req.body;
  const { error } = postLoginValidate.validate({ email, password });
  if (error) {
    const msg = error.details[0].message;
    console.log(msg);
    return next({
      err: { message: msg },
      statusCode: STATUS.STATUS_400_BAD_REQUEST,
    });
  }
  next();
};

const verifyExistUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await loginService.getByEmail(email);
    if (!user) {
      return next({
        err: { message: 'Invalid fields' },
        statusCode: STATUS.STATUS_400_BAD_REQUEST,
      });
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validateLogin,
  verifyExistUser,
};
