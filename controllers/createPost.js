const services = require('../services');

const { CREATED_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const { data: { email } } = req.user;
  const post = await services.createPost(title, categoryIds, content, email);
  return res.status(CREATED_STATUS).send(post);
};