const Category = require('../services/categories');

const create = async (req, res) => {
  const { status, data, message } = await Category.create(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
};