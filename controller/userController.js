const { Users } = require('../models');

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const result = await Users.create({ displayName, email, password, image });
    return res.status(201).json(result);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

module.exports = { createNewUser };