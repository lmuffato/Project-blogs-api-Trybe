const services = require('../services');
const { getEmailWithToken } = require('../services/token');

const create = async (req, res) => {
  const { title, content } = req.body;
  const email = getEmailWithToken(req.headers.authorization);
  const post = await services.post.create(title, content, email);
  return res.status(post.status).json(post.message);
};

module.exports = { create };
