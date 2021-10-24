const jwt = require('jsonwebtoken');

const { User: UserModel } = require('../models');
const { newUserValidate, loginValidate } = require('../validation/user');
const Utils = require('../validation/throw');

const JWT_SECRET = 'senha';
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const create = async (displayName, email, password, image) => {
    const { error } = newUserValidate.validate({ displayName, email, password });
    if (error) Utils.throwError(error, 400);

    const findUser = await UserModel.findOne({ where: { email } });
    if (findUser) Utils.throwError(new Error(), 409, 'User already registered');

    const newUser = await UserModel.create({ displayName, email, password, image });
    const { dataValues: { password: DBPass, ...others } } = newUser;
    const token = jwt.sign(others, JWT_SECRET, jwtConfig);
    return {
      token,
      statusCode: 201,
    };
};

const login = async (email, password) => {
  const { error } = loginValidate.validate({ email, password });
  if (error) Utils.throwError(error, 400);
  const user = await UserModel.findOne({ where: { email, password } });
  if (!user) Utils.throwError(new Error(), 400, 'Invalid fields');

  const { dataValues: { password: DBPass, ...others } } = user;
  const token = jwt.sign(others, JWT_SECRET, jwtConfig);
  return { statusCode: 200, token };
};

const getAll = async () => {
  let users = await UserModel.findAll();
  users = users.map((item) => {
    const { dataValues: { password, ...others } } = item;
    return others;
  });
  return { statusCode: 200, users };
};

const getById = async (id) => {
  const user = await UserModel.findByPk(id);
  if (!user) Utils.throwError(new Error(), 404, 'User does not exist');
  const { dataValues: { password, ...others } } = user;
  return {
    statusCode: 200,
    user: others,
  };
};

const destroy = async (token) => {
  const user = jwt.verify(token, JWT_SECRET);
  const { id = null } = user;
  const findUser = await UserModel.findByPk(id);
  await findUser.destroy();
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  destroy,
};