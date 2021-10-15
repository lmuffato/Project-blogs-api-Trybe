const database = require('../models');
const { createToken } = require('../middlewares/createToken');

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const addedUser = await database.User.create({ displayName, email, password, image });
  const token = createToken(addedUser.id, displayName, email, image);
  return res.status(201).json({ token });
};

module.exports = {
  addUser,
};
