const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const post = await services.getPostById(id);
  return res.status(OK_STATUS).send(post);
};