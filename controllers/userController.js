const { STATUS_CREATE } = require('../utils/httpStatus');
const { createUserS } = require('../services/userService');

const createUserC = async (req, res) => {
  const { displayName,
  email,
  password,
  image } = req.body;
  // chamar o serviço que utiliza o model para criar usuário no banco.
  const tokenNewUser = await createUserS({ displayName, email, password, image });
  return res.status(STATUS_CREATE).json({ token: tokenNewUser });
};

module.exports = {
  createUserC,
};