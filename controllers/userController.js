const { createToken } = require('../authentication/jwt');
const { User } = require('../models');

const HTTP_CONFLICT = 409;
const HTTP_CREATED = 201;

const USER_ALREADY_REGISTERED = 'User already registered';

async function findUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user;
}

async function createUser(req, res) {
  const { displayName, password, email, image } = req.body;
  const userLogin = { password, email };
  const userResgistered = await findUserByEmail(email);

  if (userResgistered) {
    return res.status(HTTP_CONFLICT).json({ message: USER_ALREADY_REGISTERED });
  }

  const token = await createToken(userLogin);

  await User.create({ displayName, password, email, image });
  return res.status(HTTP_CREATED).json({ token });
}

module.exports = {
  createUser,
};