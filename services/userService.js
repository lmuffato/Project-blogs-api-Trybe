const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const { User } = require('../models');
const errorMap = require('../utils/errorMap');

const SECRET = require('./secret');

const verifyToken = (token) => jwt.verify(token, SECRET, (err, _decoded) => {
    if (err) return false;

    return true;
  });

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  return user;
};

const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const create = async (user) => {
  const t = await sequelize.transaction();
  try {
    const { email } = user;
    
    const userExists = await findUserByEmail(email);
    if (userExists) return errorMap.userAlreadyExists;

    const newUser = await User.create(user);

    const options = { expiresIn: '1d' };

    const { id, displayName } = newUser.dataValues;

    const payload = { id, displayName };

    const token = jwt.sign(payload, SECRET, options);

    await t.commit();

    return { token };
  } catch (error) {
    await t.rollback();

    return errorMap.internalError;
  }
};

const login = async (user) => {
  try {
    const { email, password } = user;
    const result = await User.findOne({ where: { email } });

    if (!result) return errorMap.invalidFields;

    const { dataValues } = result;

    if (dataValues.password !== password) return errorMap.invalidFields;

    const { id, displayName } = dataValues;

    const payload = { id, displayName };
    const options = { expiresIn: '1d' };

    const token = jwt.sign(payload, SECRET, options);

    return { token };
  } catch (error) {
    return errorMap.internalError;
  }
};

const gettAll = async (token) => {
  try {
    const isValidToken = verifyToken(token);

    if (!isValidToken) return errorMap.invalidToken;

    const users = await User.findAll();
    
    return users;
  } catch (error) {
    return errorMap.internalError;
  }
};

const getById = async (id, token) => {
  try {
    const isValidToken = verifyToken(token);

    if (!isValidToken) return errorMap.invalidToken;

    const user = await User.findByPk(id);

    if (!user) return errorMap.nonExistentUser;

    return user.dataValues;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { create, login, gettAll, getById };