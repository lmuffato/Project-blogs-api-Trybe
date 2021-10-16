const services = require('../services');
const { NO_CONTENT } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { data: { id: userId } } = req.user;
  await services.deleteBlogPosts(id, userId);
  return res.status(NO_CONTENT).json();
};