const jwt = require('jsonwebtoken');

const { User } = require('../models');
const AppError = require('../utils/AppError');
const {
  validateName, validatePassword, validateEmail } = require('./validations/newUserValidations');
const loginValidations = require('./validations/loginValidations');

const { JWT_SECRET } = process.env;

exports.create = async ({ displayName, email, password, image }) => {
  validateName(displayName);
  validatePassword(password);
  validateEmail(email);
  
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

exports.login = async ({ email, password }) => {
  loginValidations.validateEmail(email);
  loginValidations.validatePassword(password);

  const user = await User.findOne({ where: { email } });

  if (!user || user.dataValues.password !== password) {
    throw new AppError(400, 'Invalid fields');
  }

  const token = jwt.sign({
    id: user.dataValues.id,
    email: user.dataValues.email,
  }, JWT_SECRET);

  return token;
};

exports.getAll = async () => {
  // Exclusão do atributo password consultado na documentação do sequelize
  // https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};
