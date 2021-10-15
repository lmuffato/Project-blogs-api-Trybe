const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const userSchema = require('../schema/userSchema');

const SECRET = 'Trybe';

const HTTP_BAD_STATUS = 400;
const HTTP_CONFLICT_STATUS = 409;
const HTTP_NOT_FOUND_STATUS = 404;

const insertUser = async (user) => {
  const { displayName, email, password, image } = user;
  const isNameValid = userSchema.validateName(displayName);
  const isEmailValid = userSchema.validateEmail(email);
  const isPasswordValid = userSchema.validatePassword(password);

  if (isNameValid) return ({ code: isNameValid.code, message: isNameValid.message });
  if (isEmailValid) return ({ code: isEmailValid.code, message: isEmailValid.message });
  if (isPasswordValid) return ({ code: isPasswordValid.code, message: isPasswordValid.message });

  const alreadyExists = await Users.findOne({ where: { email } });
  if (alreadyExists) return ({ code: HTTP_CONFLICT_STATUS, message: 'User already registered' });
  const newUser = await Users.create({ displayName, email, password, image });
  const { password: _, ...userPayload } = newUser.dataValues;

  const token = jwt.sign(userPayload, SECRET);

  return { token };
};

const login = async ({ email, password }) => {
  const isEmailValid = userSchema.validateEmailLogin(email);
  const isPasswordValid = userSchema.validatePasswordLogin(password);

  if (isEmailValid) return ({ code: isEmailValid.code, message: isEmailValid.message });
  if (isPasswordValid) return ({ code: isPasswordValid.code, message: isPasswordValid.message });

  const alreadyExists = await Users.findOne({ where: { email } });
  if (!alreadyExists) return ({ code: HTTP_BAD_STATUS, message: 'Invalid fields' });

  const { password: _, ...userPayload } = alreadyExists.dataValues;

  const token = jwt.sign(userPayload, SECRET);

  return { token };
};

const findAll = async () => {
  const users = await Users.findAll();
  const response = [];

  users.forEach((user) => {
    const { id, displayName, email, image } = user;
    response.push({ id, displayName, email, image });
  });

  return response;
};

const findByID = async (receivedId) => {
  const user = await Users.findByPk(receivedId);

  if (!user) return ({ code: HTTP_NOT_FOUND_STATUS, message: 'User does not exist' });

  const { id, displayName, email, image } = user;
  const response = { id, displayName, email, image };

  return response;
};

const deleteById = async (receivedId) => {
  await Users.destroy(
    { where: { id: receivedId } },
  );

  return { removes: 'ok' };
};

module.exports = {
  insertUser,
  login,
  findAll,
  findByID,
  deleteById,
};
