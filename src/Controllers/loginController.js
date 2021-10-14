const loginServices = require('../Services/loginServices');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const { code, message, token } = await loginServices
    .userLogin(email, password);

  return res.status(code).json({ message, token });
};

module.exports = {
  userLogin,
};