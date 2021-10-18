const loginServices = require('../services/loginServices');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const dataLogin = { email, password };

  const login = await loginServices.userLogin(dataLogin);
  if (login === null) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json(login);
};

module.exports = { userLogin };
