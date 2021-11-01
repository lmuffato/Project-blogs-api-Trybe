const userServices = require('../services/userService');

const createUser = async (req, res) => {
  const user = await userServices.createUser(req.body);
  if (user === 'exist') {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json(user);
};

module.exports = {
  createUser,
}; 
