const { userService } = require('../services');

const CREATED = 201;

const create = async (req, res) => {
  const { displayName, email, password, image = '' } = req.body;
  
  const result = await userService.create({ displayName, email, password, image });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

module.exports = { create };