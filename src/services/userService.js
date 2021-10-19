const { User } = require('../../models');
const error = require('../utils/errorsObject');
const tokenFunctions = require('../utils/jsonWebToken');
const validateFct = require('../utils/validateFunctions');

const emailExists = async (email) => {
  const emailExist = await User.findOne({ where: { email } });
  if (emailExist) throw error.userExists;
};

const createUser = async (displayName, email, password, image) => {
  validateFct.validateName(displayName);
  validateFct.validateEmail(email);
  validateFct.validatePassword(password);
  await emailExists(email);
  const user = await User.create({ displayName, email, password, image });
  const { _password, ...userWithoutPass } = user.dataValues;
  return tokenFunctions.createToken(userWithoutPass);
};

const login = async (email, pass) => {
  validateFct.validateEmail(email);
  validateFct.validatePassword(pass);
  const result = await User.findOne({ 
    where: { email, password: pass },
  });
  if (!result) throw error.invalidFields;
  const { password, ...userWithoutPass } = result.dataValues;
  return tokenFunctions.createToken(userWithoutPass);
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

const getById = async (id) => {
  const result = await User.findByPk(
    id, 
    { attributes: { exclude: ['password'] } },
  );
  if (!result) throw error.userDoesNotExist;
  return result;
};

module.exports = {
  createUser,
  login,
  getAll,
  getById,
};