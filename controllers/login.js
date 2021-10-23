const services = require('../services');

const access = async (req, res) => {
  const { email, password } = req.body;
  const login = await services.access(email, password);
  return res.status(login.status).json(login.message);
};

module.exports = access;
