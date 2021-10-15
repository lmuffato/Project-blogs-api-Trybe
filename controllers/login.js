const userController = require('./user');
const httpStatus = require('../utils/httpStatus');
const errorCodes = require('../utils/errorCodes');
const generateToken = require('../token/generateToken');

const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = { email, password };

  const verifyUserInfo = await userController.getUserByEmail(email);

  if (!verifyUserInfo || verifyUserInfo === null) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorLogin);
  }

  const token = generateToken(userInfo);

  return res.status(httpStatus.HTTP_OK_STATUS).json({ token });
};

module.exports = loginAuth;
