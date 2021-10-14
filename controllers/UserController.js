const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserService = require('../services/UserService');
const { Users } = require('../models');

const createUsers = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const verifyDataError = await UserService.createUsers(displayName, email, password, image);
    if (verifyDataError) {
      return res.status(verifyDataError.numberStatus).json({ message: verifyDataError.message });
    }

    const newUser = await Users.create({ displayName, email, password, image });
    const userData = { displayName: newUser.displayName, email: newUser.email };
    const token = jwt.sign(userData, process.env.JWT_SECRET);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    const verifyDataError = await UserService.loginUsers(email, password);
    if (verifyDataError) {
      return res.status(verifyDataError.numberStatus).json({ message: verifyDataError.message });
    }

    const userData = { email };
    const token = jwt.sign(userData, process.env.JWT_SECRET);
    return res.status(200).json({ token });
  } catch (e) {
    console.log('aaa', e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUsers,
  loginUsers,
};
