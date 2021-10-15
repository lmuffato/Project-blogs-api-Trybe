const services = require('../services');
const { CREATED_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { name } = req.body;
  const category = await services.createCategory(name);
  return res.status(CREATED_STATUS).send(category);
};