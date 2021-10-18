const tokenService = require('../services/token');

const logIn = (req, res) => {
  try {
    const { password, ...rest } = req.user;
    const token = tokenService.generate(rest);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { logIn };
