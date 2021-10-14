const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = await services.getUserById(id);
  return res.status(OK_STATUS).send(user);
};