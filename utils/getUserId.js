const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { User } = require('../models');

const getUserId = async (authorization) => {
  const { email } = jwt.decode(authorization, JWT_SECRET);
  
  const user = await User.findOne({ where: { email } });

  return user.id;
};

module.exports = { getUserId };
