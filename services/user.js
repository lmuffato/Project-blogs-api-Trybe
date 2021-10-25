const { User } = require('../models');
const { ValidateError, CreateToken } = require('../utils');
const { CONFLICT } = require('../utils/statusCode');

const getByEmail = (email) => User.findOne({ where: { email } })
   .then((result) => result);

const create = async (userData) => {
  const { displayName, email, password, image } = userData;
  const emailIsSingle = await getByEmail(email);
  if (emailIsSingle) throw ValidateError(CONFLICT, 'User already registered');
  
  const newUser = await User.create({ displayName, email, password, image });
  const { password: _, ...userPayload } = newUser;

  const token = CreateToken(userPayload);
  return { token };
};

module.exports = {
  create,
};