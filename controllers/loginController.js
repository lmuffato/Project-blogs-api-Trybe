const { loginUserS } = require('../services/loginService');
const { createToken } = require('../utils/token');

const {
  STATUS_OK,
  STATUS_BAD_REQUEST,
} = require('../utils/httpStatus');

const loginUserC = async (req, res) => {
  const { email, password } = req.body;
  const tryLogin = await loginUserS(email, password);
  if (!tryLogin) {
    return res.status(STATUS_BAD_REQUEST).json({ message: 'Invalid fields' });
  }
  const token = createToken({ email, password });
  return res.status(STATUS_OK).json({ token });
};

module.exports = {
  loginUserC,
};