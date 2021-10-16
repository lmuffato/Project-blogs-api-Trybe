const services = require('../services');

const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const token = await services.createLogin(email, password);
  return res.status(OK_STATUS).json(token);
};