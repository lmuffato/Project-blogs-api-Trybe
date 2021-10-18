const { User } = require('../models');
const tokenService = require('../services/token');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const { id } = await User.create({ displayName, email, password, image });
    const token = tokenService.generate(id);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { createUser };
