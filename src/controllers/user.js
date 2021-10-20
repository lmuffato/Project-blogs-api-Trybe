const { servicesControllers } = require('../services');
const { status } = require('../messages');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const create = await servicesControllers.createUser({ displayName, email, password, image });
  return res.status(status.created).json({ create });
};

module.exports = {
  createUser,
};
