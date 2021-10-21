const joi = require('@hapi/joi');
const { User } = require('../models');
const { addErro, creteToken, validateToken } = require('../util');

const validateUser = joi.object({
  displayName: joi.string().min(8),
  email: joi.string().email().required(),
  password: joi.string().length(6).required(),
});

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = validateUser.validate({ displayName, email, password });

  if (error) {
    const { message } = error.details[0];
    throw addErro(message, 400);
  }

  const findEmail = await User.findAll({ where: { email } });

  if (findEmail.length > 0) {
    throw addErro('User already registered', 409);
  }

  await User.create({ displayName, email, password, image });

  const [findUser] = await User.findAll({ where: { email } });

  const token = creteToken(findUser);

  return token;
};

const login = async (user) => {
  const { email, password } = user;
  const { error } = validateUser.validate({ email, password });

  if (error) {
    const { message } = error.details[0];
    throw addErro(message, 400);
  }

  const [findUser] = await User.findAll({ where: { email, password } });

  if (!findUser) throw addErro('Invalid fields', 400);

  const token = creteToken(findUser);

  return token;
};

const getAll = async (token) => {
  validateToken(token);

  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const findId = async (token, id) => {
  validateToken(token);

  const users = await User.findByPk(id);

  if (!users) throw addErro('User does not exist', 404);

  return users;
};

module.exports = {
  createUser,
  login,
  getAll,
  findId,
};
