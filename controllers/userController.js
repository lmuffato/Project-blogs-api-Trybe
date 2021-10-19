const { createToken } = require('../authentication/jwt');
const { User } = require('../models');

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;
const HTTP_CONFLICT = 409;

const USER_ALREADY_REGISTERED = 'User already registered';
const INVALID_FIELDS = 'Invalid fields';
const USER_NOT_EXIST = 'User does not exist';
// const attributes = ['id', 'displayName', 'email', 'image'];

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

const findAllUsers = async (_req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return res.status(HTTP_OK).json(users);
  } catch (err) {
    return res.status(HTTP_NOT_FOUND).json({ message: err.message });
  }
};

async function findUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(HTTP_NOT_FOUND).json({ message: USER_NOT_EXIST });
    return res.status(HTTP_OK).json(user);
  } catch (err) {
    return res.status(HTTP_NOT_FOUND).json({ message: USER_NOT_EXIST });
  }
}

module.exports = {
  createUser,
  userLogin,
  findAllUsers,
  findUserById,
};