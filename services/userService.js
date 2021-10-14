const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const userSchema = require('../schema/userSchema');

const SECRET = 'Trybe';

const insertUser = async (user) => {
  const { displayName, email, password, image } = user;
  const isNameValid = userSchema.validateName(displayName);
  const isEmailValid = userSchema.validateEmail(email);
  const isPasswordValid = userSchema.validatePassword(password);

  if (isNameValid) return ({ code: isNameValid.code, message: isNameValid.message });
  if (isEmailValid) return ({ code: isEmailValid.code, message: isEmailValid.message });
  if (isPasswordValid) return ({ code: isPasswordValid.code, message: isPasswordValid.message });

  const alreadyExists = await Users.findOne({ where: { email } });
  if (alreadyExists) return ({ code: 409, message: 'User already registered' });
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
  if (!alreadyExists) return ({ code: 400, message: 'Invalid fields' });

  const { password: _, ...userPayload } = alreadyExists.dataValues;

  const token = jwt.sign(userPayload, SECRET);

  return { token };
};

module.exports = {
  insertUser,
  login,
};
