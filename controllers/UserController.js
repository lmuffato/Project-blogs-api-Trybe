const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserService = require('../services/UserService');
const { validateToken } = require('../services/validations');
const { Users } = require('../models');

const INTERNAL_ERROR = 'Algo deu errado';

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
    res.status(500).json({ message: INTERNAL_ERROR });
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
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const token = req.headers.authorization;
    
    const verifyTokenError = validateToken(token);
    console.log('eeeeeeeentrou aqui', verifyTokenError);

    if (verifyTokenError) {
      return res.status(verifyTokenError.numberStatus).json({ message: verifyTokenError.message });
    }

    const users = await Users.findAll();

    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;

    const verifyTokenError = validateToken(token);
    if (verifyTokenError) {
      return res.status(verifyTokenError.numberStatus).json({ message: verifyTokenError.message });
    }

    const user = await Users.findByPk(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

module.exports = {
  createUsers,
  loginUsers,
  getAllUsers,
  getOneUser,
};
