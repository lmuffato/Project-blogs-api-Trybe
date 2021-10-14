const UserServices = require('../../services/UserServices');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const createdUser = await UserServices.createUser({ displayName, email, password, image });

  res.status(201).json(createdUser);
};