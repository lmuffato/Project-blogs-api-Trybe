const joiUser = require('../middlewares/schema');
const { User } = require('../models');
// const { createToken } = require('../middlewares/token');

function check(data) {
  const { error } = joiUser.User.validate(data);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return false;
}

async function createUser(data) {
  const checked = check(data);
  if (checked) {
    return checked;
  }
  const { displayName, email, password, image } = data;
  const searchUser = await User.findOne({ where: { email } });
  if (searchUser) {
    return { status: 409, error: 'User already registered' };
  }
  await User.create({ displayName, email, password, image });
  return { status: 201, message: 'Ta OK' };
}

module.exports = { createUser };