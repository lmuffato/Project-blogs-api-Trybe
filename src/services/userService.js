const { newToken } = require('../middlewares/token');
const { Users } = require('../models');

const findByEmail = async (email) => {
  const result = await Users.findOne({ where: { email } });
  return result;
};

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const emailAlreadyExist = await findByEmail(email);

  if (emailAlreadyExist) {
    return { 
      code: 409,
      message: 'User already registered', 
    }; 
  }
  const { dataValues: { password: _, ...userWithoutPassword } } = await Users.create({ 
    displayName, email, password, image, 
  });

  const token = newToken(userWithoutPassword);
  return token;
};

const getAll = async () => {
  const users = await Users.findAll({
    attributes: { exclude: 'password' },
  });

  return users;
};

const findById = async (id) => {
  const user = await Users.findOne({
    where: { id },
    attributes: { exclude: 'password' },
  });

  if (!user) {
    return {
      error: {
        code: 404,
        message: 'User does not exist',
      },
    };
  }

  return user.dataValues;
};

const deleteUser = async (email) => {
  await Users.destroy({
    where: { email },
  });
};

module.exports = {
  createUser,
  getAll,
  findById,
  deleteUser,
};