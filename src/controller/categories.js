const service = require('../service/categories');

const createCategories = async (req, res) => {
  const { status, data, message } = await service.createCategories(req.body);
 
  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  createCategories,
};
