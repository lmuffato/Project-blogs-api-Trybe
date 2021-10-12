const service = require('../services/userService');

const createUser = async (req, res) => {
  const newUser = await service.createUser(req);
  
  if (newUser) return (res.status(201).json(newUser));
};

module.exports = {
  createUser,
};
