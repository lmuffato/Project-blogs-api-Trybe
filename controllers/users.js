const { User } = require('../models');
// const util = require('../middlewares/validations');

const getAll = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  // const validateName = util.validateDisplayName(displayName);
  // if (validateName) return res.status(validateName.status).json(validateName.message);
  const user = await User.create({ displayName, email, password, image });
  res.status(201).json(user);
};

module.exports = {
  getAll,
  create,
};
