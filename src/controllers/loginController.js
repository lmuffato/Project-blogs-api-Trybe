const loginService = require('../services/loginService');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    const response = await loginService.login(email, password);

    return res
      .status(response.status)
      .json(
        response.token
          ? { token: response.token }
          : { message: response.message },
      );
  },
};