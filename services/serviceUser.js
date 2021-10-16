const { User } = require('../models');
const createToken = require('../auth/jwtFunctions');

const createUser = async (data) => {
  const { email } = data;

  const findUser = await User.findOne({ where: { email } });
  if (findUser) return { status: 409, message: 'User already registered' };

  await User.create(data);

  const payload = { ...email };
  const token = await createToken.create(payload);

  return { status: 201, data: token };
};

module.exports = { 
  createUser,
};
