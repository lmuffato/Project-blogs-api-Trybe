const jwt = require('jsonwebtoken');
const validationSchema = require('../helpers/validation_schema');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createUser = async (data) => {
  const { error } = validationSchema.userSchema.validate(data);
  if (error) return { statusCode: 400, message: error.details[0].message };
  const { email } = data;
  const userExist = await User.findOne({ where: { email } });
  if (userExist) return { statusCode: 409, message: 'User already registered' };
  await User.create(data);
  return { statusCode: 201, message: 'Cadastrado com sucesso' };
};

const userLogin = async (data) => {
  const { error } = validationSchema.loginSchema.validate(data);
  if (error) return { statusCode: 400, message: error.details[0].message };
  const { email } = data;
  const login = await User.findOne({ where: { email } });
  if (!login) return { statusCode: 400, message: 'Invalid fields' };
  const token = jwt.sign({ data: login }, JWT_SECRET);
  return { statusCode: 200, token };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  return { statusCode: 200, users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
    // https://www.codegrepper.com/code-examples/javascript/don't+get+password+sequelize
  });
  if (!user) return { statusCode: 404, message: 'User does not exist' };
  return { statusCode: 200, user };
};

module.exports = {
  createUser,
  userLogin,
  getAll,
  getById,
};
