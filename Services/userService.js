const { builtError, generateToken } = require('./heplers');
const { User } = require('../models');

const create = async (payload) => {
  try {
    const { email } = payload;
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) return builtError(409, 'User already registered');

    await User.create(payload);

    return { token: generateToken({ email }) };
  } catch (e) {
    return builtError(500, e.message);
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) return builtError(400, 'Invalid fields');
    return { token: generateToken({ email }) };
  } catch (e) {
    return builtError(500, e.message);
  }
};

const listAll = async () => {
  try {
    return User.findAll({ attributes: { exclude: ['password'] } });
  } catch (e) {
    return builtError(500, e.message);
  }
};

module.exports = {
  create,
  login,
  listAll,
};
