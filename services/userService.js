const { Users } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const emailUser = await Users.findOne({ email });
  
  if (emailUser) return { code: 409, message: 'User already registered' };
  
  const { userData } = await Users.create({ displayName, email, password, image });

  const { password: _, ...user } = userData;
  return user;
};

module.exports = { createUser };