const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (_req, res) => {
  const posts = await services.getAllPosts();
  return res.status(OK_STATUS).send(posts);
};