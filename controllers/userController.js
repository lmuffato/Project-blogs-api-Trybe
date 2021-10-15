const userService = require('../services/userService');

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);
  res.status(status).json(data);
};

module.exports = {
  create,
};