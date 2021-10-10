const STATUS = require('../util/status');
const loginService = require('../services/loginService');

const postLogin = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = await loginService.postLogin(email);
    return res.status(STATUS.STATUS_200_OK).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  postLogin,
};
