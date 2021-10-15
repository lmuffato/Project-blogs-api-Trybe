const { createUserService } = require('../services/user');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data, message } = await createUserService(displayName, email, password, image);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  createUserController,
};
