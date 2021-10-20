const { loginServices } = require('../services');
const { status } = require('../messages');

const loginUser = async (req, res) => {
  const loginDataUser = req.body;
  const login = await loginServices.loginUser(loginDataUser);
  return res.status(status.OK).json(login);
};

module.exports = {
  loginUser,
};
