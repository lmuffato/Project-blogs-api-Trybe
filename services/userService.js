const jwt = require('jsonwebtoken');
const { User } = require('../models');
const errorMap = require('../utils/errorMap');

const SECRET = require('./secret');

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  return user;
};

const create = async (user) => {
  try {
    const { email } = user;
    
    const userExists = await findUserByEmail(email);
    if (userExists) return errorMap.userAlreadyExists;

    const newUser = await User.create(user);

    const options = { expiresIn: '7d' };

    const { id, displayName } = newUser.dataValues;

    const payload = { id, displayName };

    const token = jwt.sign(payload, SECRET, options);
    return { token };
  } catch (error) {
    console.log(error);
    return errorMap.internalError;
  }
};

module.exports = { create };