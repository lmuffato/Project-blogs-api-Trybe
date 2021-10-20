const { userServices } = require('../services');
const { status } = require('../messages');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const create = await userServices.createUser({ displayName, email, password, image });
  return res.status(status.created).json(create);
};

module.exports = {
  createUser,
};
