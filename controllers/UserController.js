const Users = require('../services/UserService');

const createUser = async (req, res) => {
  const data = req.body;
  const { status, message, token } = await Users.createUser(data);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(token);
};

module.exports = {
  createUser,
};
