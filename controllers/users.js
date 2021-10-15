const jwt = require('jsonwebtoken');
const { User } = require('../models');
const ERRORS = require('../middlewares/errorMsg');

const SECRET = process.env.JWT_SECRET;

const getAll = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const getByEmail = async (userEmail) => {
  const getEmail = await User.findAll({ where: { email: userEmail } });
  return getEmail;
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await User.create({ displayName, email, password, image });
  res.status(201).json(user);
};

const getToken = (user) => {
  const token = jwt.sign(user, SECRET);
  return { token };
};

const findUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await getByEmail(email);
  const { email: dbEmail, password: dbPassword } = user[0].dataValues;
  if (dbEmail !== email || dbPassword !== password) {
    return res.status(400).json(ERRORS.invalidFields);
  }
  const token = getToken({ dbEmail, dbPassword });
  res.status(200).json(token);
};

module.exports = {
  getAll,
  create,
  getByEmail,
  findUser,
};
