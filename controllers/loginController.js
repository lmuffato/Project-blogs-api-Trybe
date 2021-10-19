const loginService = require('../services/loginService');

async function login(req, res) {  
    const { status, data, message } = await loginService.userLogin(req.body);
    if (message) {
    return res.status(status).json({ message });
    }
    return res.status(status).json(data);
}

module.exports = { login };

/* const loginServices = require('../services/loginServices');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const dataLogin = { email, password };

  const login = await loginServices.userLogin(dataLogin);
  if (login === null) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json(login);
};

module.exports = { userLogin }; */
