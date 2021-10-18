const { User } = require('../models'); 

const createUser = async ({ displayName, email, password, image }) => User.create({
    displayName,
    email,
    password,
    image,
  });

const getAll = async () => {
  const user = await User.findAll({});
  return user;
};

const getUserByID = async ({ id }) => {
  const findId = await User.findOne({ where: { id } });
  if (!findId) {
    return { error: true, message: 'User does not exist', status: 404 };
  }
  return findId;
};

module.exports = {
  createUser,
  getAll,
  getUserByID,
};