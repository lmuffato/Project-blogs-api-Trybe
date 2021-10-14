const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { err, token } = await userService.createUser({ displayName, email, password, image });

  if (err) return res.status(409).json(err);

  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { err, token } = await userService.loginUser({ email, password });

  if (err) return res.status(400).json(err);

  res.status(200).json({ token });
};

module.exports = {
  create,
  login,
};
