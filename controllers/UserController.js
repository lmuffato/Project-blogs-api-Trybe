const userService = require('../services/UserServices');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json({ token: newUser.token });
};

module.exports = {
  createUser,
};