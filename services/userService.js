const { Users } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const emailUser = await Users.findOne({ where: { email } });
  
  if (emailUser) return { code: 409, message: 'User already registered' };
  
  const { dataValues } = await Users.create({ displayName, email, password, image });

  const { password: _, ...user } = dataValues;
  return user;
};

module.exports = { createUser };