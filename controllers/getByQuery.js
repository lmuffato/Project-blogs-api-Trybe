const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const query = req.query.q;
  console.log(query);
  const post = await services.getByQuery(query);
  return res.status(OK_STATUS).json(post);
};