const { User } = require('../models');
const generateToken = require('../auth/generateToken');

module.exports = {
  async create(req, res) {
    const { displayName, email, password, image } = req.body;

    try {
      await User.create({ displayName, email, password, image });
      const token = generateToken(email);
      return res.status(201).json({ token });
    } catch (error) {
      return res.status(409).json({ message: 'User already registered' });
    }
  },
};
