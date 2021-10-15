const {
  createUser,
  getUserByEmail,
  loginUser,
  findAllUsers,
  getUserById } = require('../services/userService');
const { userSchema } = require('../schemas/validateUserDatas');
const { loginSchema } = require('../schemas/validateLoginDatas');
const { alreadyRegistered, invalidFields, notExist } = require('../utils/errorMessages');
const { HTTP_BAD_REQUEST, HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../utils/statusHTTP');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { message, code } = alreadyRegistered;
  
  try {
    await userSchema.validate({ displayName, email, password, image });
  } catch (e) {
    return res.status(HTTP_BAD_REQUEST).json({ message: e.errors[0] });
  }
  
  const userByEmail = await getUserByEmail(email);
  if (userByEmail) return res.status(code).json({ message });

  const user = await createUser({ displayName, email, password, image });
  return res.status(HTTP_CREATED_STATUS).json(user);
};

const findAll = async (_req, res) => {
  const users = await findAllUsers();
  res.status(HTTP_OK_STATUS).json(users);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { message, code } = invalidFields;

  try {
    await loginSchema.validate({ email, password });
  } catch (e) {
    return res.status(HTTP_BAD_REQUEST).json({ message: e.errors[0] });
  }

  const user = await loginUser(email, password);
  if (!user) return res.status(code).json({ message });

  return res.status(HTTP_OK_STATUS).json(user);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  const { message, code } = notExist;

  if (!user) return res.status(code).json({ message });

  return res.status(HTTP_OK_STATUS).json(user);
};

module.exports = { findAll, create, login, findById };
