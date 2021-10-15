const { User } = require('../models'); 

const createUser = async (user) => {
  // const { displayName, email, password, image } = user;

  // console.log(displayName, email, password, image, 'SERVICEEEEE');

  const result = await User.create(user);
  return result;
};

const findAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

const findUserById = async (id) => {
  const result = await User.findByPk(id);
  console.log(result, 'service USER');
  const { password: _, ...user } = result.dataValues;

  return user;
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
};
