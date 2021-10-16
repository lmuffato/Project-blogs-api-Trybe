const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { data: { id: userId } } = req.user;
  const post = await services.updateBlogPosts(id, userId, title, content);
  return res.status(OK_STATUS).json(post);
};