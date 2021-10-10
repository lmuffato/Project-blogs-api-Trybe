const jwt = require('jsonwebtoken');
const { User } = require('../models');
const Schema = require('../utils/schema');

const { SECRET } = process.env;

const create = async (data) => {
  const { error } = Schema.User.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const checkedEmail = await User.findOne({ where: { email: data.email } });
  if (checkedEmail) return { status: 409, message: 'User already registered' };

  const user = await User.create(data);
  const token = jwt.sign({ data: user.dataValues }, SECRET);

  return { status: 201, data: { token } };
};

const getAll = async () => {
  const users = await User.findAll();

  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };

  return { status: 200, data: user };
};

const remove = async (id) => {
  const user = await User.findByPk(id);
  await user.destroy();

  return { status: 204 };
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};