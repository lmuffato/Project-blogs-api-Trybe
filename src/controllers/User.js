const { Users } = require('../models');
const tokenService = require('../services/token');
const { notFoundUser } = require('../utils/errors');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const { id } = await Users.create({ displayName, email, password, image });
    const token = tokenService.generate(id);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllUsers = async (req, res) => {
  const users = await Users.findAll();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await Users.findByPk(id, { raw: true });
    
    if (!user) {
      return res
      .status(notFoundUser.code)
      .json({ message: notFoundUser.message });
    }

    const { password, ...rest } = user;

    return res.status(200).json(rest);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { createUser, getAllUsers, getUserById };
