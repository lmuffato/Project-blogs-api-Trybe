const rescue = require('express-rescue');
const services = require('../services/loginService');

const loginController = rescue(async (req, res) => {
  const { email, password } = req.body;
      const result = await services.loginService({
        email,
        password,
      });
      res.status(result.status).json({ token: result.token });
});

module.exports = { 
  loginController,
};