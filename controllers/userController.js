const { STATUS_CREATE, STATUS_OK } = require('../utils/httpStatus');
const { createUserS, getUsersS, getByIdS, findByEmailS,
  deleteUserS } = require('../services/userService');

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

const deleteUserC = async (req, res) => {
  const { email } = req.user;
  const foundUser = await findByEmailS(email);
  const { id: userId } = foundUser; // userId vindo do token
  try {
    await deleteUserS(userId);
    return res.status(204).send();
  } catch (error) {
    return res.status(402).json({ message: 'Erro interno' });
  }
};
module.exports = {
  createUserC,
  getUsersC,
  getByIdC,
  deleteUserC,
};