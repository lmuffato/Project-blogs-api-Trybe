const services = require('../services');
const { NO_CONTENT } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { data: { id } } = req.user;
  await services.deleteUser(id);
  return res.status(NO_CONTENT).json();
};