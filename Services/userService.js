const { builtError, generateToken } = require('./heplers');
const { User } = require('../models');

const create = async (payload) => {
  try {
    const { email, password, image, ...data } = payload;
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) return builtError(409, 'User already registered');

    await User.create(payload);

    return { token: generateToken({ ...data, email }) };
  } catch (e) {
    builtError(500, e.message);
  }
};

module.exports = {
  create,
};
