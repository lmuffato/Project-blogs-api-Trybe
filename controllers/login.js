const services = require('../services/login');

const login = async (req, res, next) => {
  const response = await services.login(req.body);

  if (response.code) return next(response);

  return res.status(200).json({ token: response });
};

module.exports = {
  login,
};