const jwt = require('jsonwebtoken');
const { User } = require('../models');
const check = require('../utils/util');

const { JWT_SECRET } = process.env;

const loginUser = async ({ email, password }) => {
  const { error } = check.checkLogin.validate({ email, password });
  if (error) return { status: 400, message: error.details[0].message };

  const user = await User.findOne({ where: { email, password } });
  
  if (!user) return { status: 400, message: 'Invalid fields' };
  const token = jwt.sign({ data: user }, JWT_SECRET);

  return { status: 200, token };
};

module.exports = {
  loginUser,
};