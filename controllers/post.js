const services = require('../services');

const create = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const post = await services.post.create(title, categoryIds, content);
  return res.status(post.status).json(post.message);
};

module.exports = { create };
