const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (_req, res) => {
  const categories = await services.getAllCategories();
  return res.status(OK_STATUS).send(categories);
};