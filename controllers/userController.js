const userServices = require('../services/userServices');

const createUser = async (request, response) => {
  const user = await userServices.createUser(request.body);
  if (user === 'exist') {
    return response.status(409).json({ message: 'User already registered' });
  }
  
  return response.status(201).json(user);
};

const getUserByID = async (request, response) => {
  const { id } = request.params;
  const user = await userServices.getUserByID(id);
  if (user === undefined) {
    return response.status(404).json({ message: 'User does not exist' });
  }

  return response.status(200).json(user);
};

const getUsers = async (_request, response) => {
  const users = await userServices.getUsers();
  return response.status(200).json(users);
};

const userLogin = async (request, response) => {
  const { email, password } = request.body;
  const dataLogin = { email, password };
  const login = await userServices.userLogin(dataLogin);
  if (login === null) {
    return response.status(400).json({ message: 'Invalid fields' });
  }
  return response.status(200).json(login);
};

module.exports = {
  createUser,
  getUserByID,
  getUsers,
  userLogin,
};
