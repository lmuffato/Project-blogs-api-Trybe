const { user } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userCreate = await user.create({ displayName, email, password, image });
  return res.status(userCreate.status).json(userCreate.message);
};

module.exports = { create };
