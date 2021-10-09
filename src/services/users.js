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

module.exports = {
  create,
};