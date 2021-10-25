const { STATUS_CREATE, STATUS_OK } = require('../utils/httpStatus');
const { createUserS, getUsersS, getByIdS } = require('../services/userService');

const createUserC = async (req, res) => {
  const { displayName,
  email,
  password,
  image } = req.body;
  // chamar o serviço que utiliza o model para criar usuário no banco.
  const tokenNewUser = await createUserS({ displayName, email, password, image });
  return res.status(STATUS_CREATE).json({ token: tokenNewUser });
};

const getUsersC = async (req, res) => {
  const users = await getUsersS();
  return res.status(STATUS_OK).json(users);
};

const getByIdC = async (req, res) => {
  const { id } = req.params;
  const user = await getByIdS(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  const { displayName, email, image } = user;
  return res.status(STATUS_OK).json({ id: parseInt(id, 10), displayName, email, image });
};

module.exports = {
  createUserC,
  getUsersC,
  getByIdC,
};