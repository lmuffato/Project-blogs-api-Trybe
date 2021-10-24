const jwt = require('jsonwebtoken');
const { User } = require('../models');
const check = require('../utils/util');

const { JWT_SECRET } = process.env;

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = check.CheckUser.validate({ displayName, email, password, image });
  if (error) return { status: 400, message: error.details[0].message };

  const checkedEmail = await User.findOne({ where: { email } });
  if (checkedEmail) return { status: 409, message: 'User already registered' };

  const user = await User.create({ displayName, email, password, image });
  const token = jwt.sign({ data: user.dataValues }, JWT_SECRET);

  return { status: 201, token };
};

module.exports = {
  createUser,
};
