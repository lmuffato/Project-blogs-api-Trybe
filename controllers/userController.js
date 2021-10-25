const userService = require('../services/userService');

const addUser = async (req, res) => {
  const { status, response } = await userService.addUsers(req.body);
  return res.status(status).json(response);
};

module.exports = {
  addUser,
}; 
