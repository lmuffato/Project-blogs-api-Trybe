const Users = require('../services/usersService.js');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await Users.createUser({ displayName, email, password, image });
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json({ token: result.token });
};

module.exports = {
  createUser,
};