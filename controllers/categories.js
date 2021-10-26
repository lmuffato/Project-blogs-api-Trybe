const services = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const catefory = await services.categories.create(name);
  return res.status(catefory.status).json(catefory.message);
};

module.exports = { create };
