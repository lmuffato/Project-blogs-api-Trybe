const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { getUserId } = require('../utils/getUserId');

const { JWT_SECRET = 'teste' } = process.env;

const createUser = async ({ body: { displayName, email, password, image } }) => {
  User.create({ displayName, email, password, image });
  const token = jwt.sign({ email }, JWT_SECRET);
  return ({ token });
};

const findAllUsers = async () => User.findAll();

const findUser = async (id) => User.findOne({ where: { id } });

const deleteUser = async (authorization) => {
  const id = await getUserId(authorization);

  const user = await findUser(id);

  if (!user) return false;

  const deletedUser = await User.destroy({ where: { id } });

  return deletedUser;
};

module.exports = {
  createUser,
  findAllUsers,
  findUser,
  deleteUser,
};
