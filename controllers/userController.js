const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  console.log(email, 'controller');

  const { err, token } = await userService.createUser({ displayName, email, password, image });

  if (err) return res.status(409).json(err);

  res.status(201).json({ token });
};

module.exports = {
  create,
};
