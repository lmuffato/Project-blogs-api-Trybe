const services = require('../services');
const { OK_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { data: { email } } = req.user;
  const post = await services.updateBlogPosts(id, email, title, content);
  return res.status(OK_STATUS).send(post);
};