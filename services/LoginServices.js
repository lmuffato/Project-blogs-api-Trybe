const { Users } = require('../models');
const {
  genToken,
} = require('../ultilities/genToken');

const Login = async (email, id) => {
  const token = await genToken(email, id);
  return { token };
};

const findUserId = async (email) => {
  const findedId = await Users.findOne({ where: { email } });
  return findedId;
};

module.exports = {
  Login,
  findUserId,
};