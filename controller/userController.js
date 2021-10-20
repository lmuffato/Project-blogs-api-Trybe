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

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await UserService
    .createLogin(email, password);
    return res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

module.exports = { createNewUser, createLogin, getAllUsers };