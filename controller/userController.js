const UserService = require('../services/userService');

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await UserService
      .createNewUser(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { createNewUser };