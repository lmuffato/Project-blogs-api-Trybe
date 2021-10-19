const { createUserService, getAllUsersService, getUserByIdService } = require('../services/user');

// ------------------------------------ CREATE --------------------------------------------- //

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data, message } = await createUserService(displayName, email, password, image);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

// ------------------------------------ GETALL --------------------------------------------- //

const getAllUserController = async (_req, res) => {
  const { status, data } = await getAllUsersService();
  
  res.status(status).json(data);
};

// ------------------------------------ GETBYID --------------------------------------------- //

const getUserByIdController = async (req, res) => {
  const { status, data, message } = await getUserByIdService();

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  createUserController,
  getAllUserController,
  getUserByIdController,
};
