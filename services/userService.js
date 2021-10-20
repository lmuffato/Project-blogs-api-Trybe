const { Users } = require('../models');
const { genToken } = require('../helpers/validateJWT');

const createNewUser = async (displayName, email, password, image) => {
  const data = await Users.create({ displayName, email, password, image });
  const { password: userPassword, ...objData } = data.toJSON();
  const token = genToken(objData);
  return token;
};

const createLogin = async (email, password) => {
  await Users.findOne({ where: { email, password } });
  const token = await genToken(email);
  return token;
};

module.exports = {
  createNewUser,
  createLogin,
};