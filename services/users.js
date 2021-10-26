const { User } = require('../models');
const createToken = require('../auth/jwtFunctions');

const create = async ({ displayNmae, email, password, image }) => {
  await User.create(displayNmae, email, password, image);
  // console.log('returno do model User:', teste);
  const token = createToken.create(email);
  // console.log('retorno da funcao create token:', token);
  return token;
};

module.exports = {
  create,
};