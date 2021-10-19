const { createToken } = require('../authentication/jwt');
const { User } = require('../models');

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_CONFLICT = 409;

const USER_ALREADY_REGISTERED = 'User already registered';
const INVALID_FIELDS = 'Invalid fields';

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (req, res) => {
  const { displayName, password, email, image } = req.body;
  const userLogin = { password, email };
  const userResgistered = await findUserByEmail(email);

  if (userResgistered) {
    return res.status(HTTP_CONFLICT).json({ message: USER_ALREADY_REGISTERED });
  }

  const token = await createToken(userLogin);

  await User.create({ displayName, password, email, image });
  return res.status(HTTP_CREATED).json({ token });
};

const userLogin = async (req, res) => {
  const { password, email } = req.body;
  const login = { password, email };
  const isUserResgistered = await findUserByEmail(email);

  if (!isUserResgistered) {
    return res.status(HTTP_BAD_REQUEST).json({ message: INVALID_FIELDS });
  }

  const token = await createToken(login);

  return res.status(HTTP_OK).json({ token });
};

module.exports = {
  createUser,
  userLogin,
};