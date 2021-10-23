const UserServices = require('../../services/user');

const findAll = async (_req, res) => {
  const usersList = await UserServices.findAll();

  return res.status(200).json(usersList);
};

module.exports = findAll;