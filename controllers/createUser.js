const services = require('../services');
const { CREATED_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const token = await services.createUser(req.body);
  return res.status(CREATED_STATUS).send(token);
};