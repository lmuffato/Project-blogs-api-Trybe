const { User } = require('../models');
const generateToken = require('../auth/generateToken');

module.exports = {
  async create(req, res) {
    const { displayName, email, password, image } = req.body;

    try {
      await User.create({ displayName, email, password, image });
      const token = generateToken({ email });
      return res.status(201).json({ token });
    } catch (error) {
      return res.status(409).json({ message: 'User already registered' });
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const users = await User.findAll({
          where: { id },
          attributes: { exclude: ['password'] },
        });
        if (!users.length) throw new Error('User does not exist');
        return res.status(200).json(users[0]);
      }
      const users = await User.findAll({ attributes: { exclude: ['password'] } });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
};
