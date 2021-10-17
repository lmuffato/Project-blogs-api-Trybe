const { User } = require('../models');
const createToken = require('../auth/jwtFunctions');
// const verifyToken = require('../auth/authBasec');

const createUser = async (data) => {
  const { email } = data;

  const findUser = await User.findOne({ where: { email } });
  if (findUser) return { status: 409, message: 'User already registered' };

  await User.create(data);

  const payload = { ...email };
  const token = await createToken.create(payload);

  return { status: 201, data: token };
};

const getAllUsers = async () => {
  const allUser = await User.findAll();
  return { status: 200, data: allUser };
};

module.exports = { 
  createUser,
  getAllUsers,
};
