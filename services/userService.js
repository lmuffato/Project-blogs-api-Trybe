const { Users } = require('../models');
const { genToken } = require('../helpers/validateJWT');

const createNewUser = async (displayName, email, password, image) => {
  const data = await Users.create({ displayName, email, password, image });
  const { password: userPassword, ...objData } = data.toJSON();
  const token = genToken(objData);
  return token;
};

const createLogin = async (email, password) => {
  const result = await Users.findOne({ where: { email, password } });
  const token = genToken(result);
  return token;
};

const getAllUsers = async () => Users.findAll();

const getById = async (id) => {
  const result = await Users.findOne({ where: { id } });
  return result;
};

module.exports = {
  createNewUser,
  createLogin,
  getAllUsers,
  getById,
};