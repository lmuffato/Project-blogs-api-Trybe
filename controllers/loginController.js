const rescue = require('express-rescue');
const { StatusCodes: { OK } } = require('http-status-codes');
const service = require('../services/loginService');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
      const { token } = await service.login({
        email,
        password,
      });
      res.status(OK).json({ token });
});

module.exports = { 
  login,
};