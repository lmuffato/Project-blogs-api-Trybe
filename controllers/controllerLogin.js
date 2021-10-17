const serviceLogin = require('../services/serviceLogin');

const loginUser = async (req, res) => {
  const dataBody = req.body;
  const { status, data } = await serviceLogin.loginUser(dataBody);
  return res.status(status).json(data);
};

module.exports = {
  loginUser,
};