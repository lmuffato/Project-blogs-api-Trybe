const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const create = await userService.createUser(req.body);
    if (create.message) return res.status(create.code).json({ message: create.message });
    res.status(201).json(create);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { createUser };
