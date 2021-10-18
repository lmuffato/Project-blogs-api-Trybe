const Users = require('../services/userServices');

const create = async (req, res) => {
  const { status, data, message } = await Users.create(req.body);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  create,
};
