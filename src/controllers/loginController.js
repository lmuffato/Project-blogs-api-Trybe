const Login = require('../services/loginServices');

const loginUser = async (req, res) => {
  const { status, data, message } = await Login.userLogin(req.body);

  if (message) {
    return res.status(status).json({ message });
  }

  res.status(status).json(data);
};

module.exports = {
  loginUser,
};
