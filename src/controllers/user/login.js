const UserServices = require('../../services/user');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const userToken = await UserServices.userLogin(email, password);

  if (!userToken) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  return res.status(200).json({
    token: userToken,
  });
};

module.exports = userLogin;