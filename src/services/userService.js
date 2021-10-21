const { newToken } = require('../middlewares/token');
const { User } = require('../models');

const findByEmail = async (email) => {
  const result = await User.findOne({ where: { email } });
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
  const { dataValues: { password: _, ...userWithoutPassword } } = await User.create({ 
    displayName, email, password, image, 
  });

  const token = newToken(userWithoutPassword);
  return token;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: 'password' },
  });

  return users;
};

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: 'password' },
  });

  if (!user) {
    return {
      code: 404,
      message: 'User does not exist',
    };
  }

  return user.dataValues;
};

const deleteUser = async (email) => {
  await User.destroy({
    where: { email },
  });
};

module.exports = {
  createUser,
  getAll,
  findById,
  deleteUser,
};