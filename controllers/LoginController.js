const loginServices = require('../services/LoginServices');

const Login = async (req, res) => {
  const { email } = req.body;
  const { id } = await loginServices.findUserId(email);
  console.log('id do usuario aqui:', id);
  const loginJWT = await loginServices.Login(email, id);
  return res.status(200).json({ token: loginJWT.token });
};

module.exports = {
  Login,
};