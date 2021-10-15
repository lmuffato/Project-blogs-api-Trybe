const userController = require('./userController');
const { ERROR_INVALID_FIELDS } = require('../utils/errors');
const tokenGenerator = require('../auth/tokenGenerator');

const loginAuthentication = async (req, res) => {
  const { email, password } = req.body;
  const userData = { email, password };

  const checkUser = await userController.findUserByEmail(email);
  if (!checkUser) {
    return res.status(ERROR_INVALID_FIELDS.error.status)
      .json({ message: ERROR_INVALID_FIELDS.error.message });
  }
  const token = tokenGenerator(userData);
  return res.status(200).json({ token });
};

module.exports = loginAuthentication;