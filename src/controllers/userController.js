const userService = require('../services/userService');

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, response } = await userService.addUser(displayName, email, password, image);
  res.status(status).json(response);
};

module.exports = {
  addUser,
};
