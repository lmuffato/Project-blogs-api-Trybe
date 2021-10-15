const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const { User } = require('../models');
const errorMap = require('../utils/errorMap');

const SECRET = require('./secret');

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

    const options = { expiresIn: '7d' };

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

module.exports = { create };