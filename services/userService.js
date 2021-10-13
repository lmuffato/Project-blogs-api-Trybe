const { Users } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await Users.findOne({ where: { email } });

  if (user) return { code: 409, message: 'User already registered' };

  const { dataValues } = await Users.create({ displayName, email, password, image });
  
  const { password: _, ...newUser } = dataValues;

  return newUser;
};

const getAll = async () => {
  const allUser = await Users.findAll();

  return allUser;
};

module.exports = { createUser, getAll };