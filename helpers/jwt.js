const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const getUserId = async (token) => {
  const { id } = jwt.decode(token, process.env.JWT_SECRET);
  if (!id) return false;
  const { id: idUser } = await User.findOne({ where: { id } });
  return idUser;
};

module.exports = getUserId;
