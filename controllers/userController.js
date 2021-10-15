const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'secret123';

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await User.create({ displayName, email, password, image });

    const jwtconfig = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: { email } }, secret, jwtconfig);
    return res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getAll = async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch(e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  create,
  getAll,
  findUser,
}