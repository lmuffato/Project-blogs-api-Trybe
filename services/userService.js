const { Users } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const emailUser = await Users.findOne({ where: { email } });
  
  if (emailUser) return { code: 409, message: 'User already registered' };
  
  const { dataValues } = await Users.create({ displayName, email, password, image });

  const { password: _, ...user } = dataValues;
  return user;
};

const getAllUsers = async () => {
  const allUsers = await Users.findAll();

  return allUsers;
};

const getUser = async (id) => {
  const user = await Users.findOne({ where: { id } });

  if (!user) return { code: 404, message: 'User does not exist' };

  return user.dataValues;
};

module.exports = { createUser, getAllUsers, getUser };