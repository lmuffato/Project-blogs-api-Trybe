const users = require('../services/usersService');
const { STATUS_CREATED } = require('../utils/msg');

const createUser = async (req, res) => {
  const newUser = req.body;
  const user = await users.createUser(newUser);
  return res.status(STATUS_CREATED).json(user);
};

module.exports = { createUser };