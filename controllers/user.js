const userService = require('../services/users');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const userCreated = await userService.createUser(displayName, email, password, image);
    return res.status(201).json({ token: userCreated });
  } catch (_err) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

const loginUser = async (req, res) => {
  const { email } = req.body;
  const logedUser = await userService.loginUser(email);
  return res.status(200).json({ token: logedUser });
};

module.exports = {
  createUser,
  loginUser,
};