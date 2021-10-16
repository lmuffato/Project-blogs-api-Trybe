const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (_req, res) => {
  const users = await services.getUsers();
  return res.status(OK_STATUS).json(users);
};