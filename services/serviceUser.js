const { User } = require('../models');
const createToken = require('../auth/jwtFunctions');

const createUser = async (data) => {
  const { email } = data;

  const findUser = await User.findOne({ where: { email } });
  if (findUser) return { status: 409, data: { message: 'User already registered' } };

  await User.create(data);

  const payload = { ...email };
  const token = await createToken.create(payload);

  return { status: 201, data: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: user };
};

module.exports = { 
  createUser,
  getAllUsers,
  getUserById,
};
