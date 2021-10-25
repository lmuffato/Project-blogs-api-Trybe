const { User } = require('../models');

async function listAllUsers() {
  return User.findAll();
}

async function saveUser(user) {
  const userOrNull = await User.findOne({ where: { email: user.email } });
  if (userOrNull !== null) throw new Error('User already registered');
  const userSaved = await User.create({ ...user });
  return !!userSaved;
}

async function signIn(email, password) {
  const userOrNull = await User.findOne({ where: { email, password } });
  if (userOrNull === null) throw new Error('Invalid fields');
  return true;
}

module.exports = { listAllUsers, saveUser, signIn };