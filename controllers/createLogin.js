const services = require('../services');

const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const token = await services.createLogin(req.body);
  return res.status(OK_STATUS).send(token);
};