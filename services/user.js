const { User } = require('../models');
const { ValidateError, CreateToken } = require('../utils');
const { CONFLICT, BAD_REQUEST } = require('../utils/statusCode');

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

const validateUserAccess = (user, email, password) => {
  if (user === null) throw ValidateError(BAD_REQUEST, 'Invalid fields');

  if (user.email !== email || user.password !== password) {
    throw ValidateError(BAD_REQUEST, 'Invalid fields');
  }
};

const login = async (email, password) => {
  const user = await getByEmail(email);
  validateUserAccess(user, email, password);
  const { password: _, ...userPlayload } = user;
  const token = CreateToken(userPlayload);
  return token;
};

const getAll = () => User.findAll().then((res) => res);

module.exports = {
  create,
  login,
  getAll,
};