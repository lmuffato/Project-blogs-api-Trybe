const { Category } = require('../models');

module.exports = {
  async create(req, res) {
    const { name } = req.body;
    try {
      const category = await Category.create({ name });
      return res.status(201).json(category);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  },
};
