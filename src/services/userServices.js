// dica de implementação e uso do joi: bia zidioti
const schema = require('../middlewares/joi');
const { User } = require('../models');
const httpStatus = require('../status/status');
// const errorCodes = require('../error/errorCodes');

function validateUserFull(data) {
  const { error } = schema.userJoi.validate(data);

  if (error) {
    return { status: httpStatus.BAD_REQUEST, error: error.details[0].message };
  }
  return false;
}

async function createUserServices(data) {
  const userChecked = validateUserFull(data);

  if (userChecked) {
    return userChecked;
  }

  const { displayName, email, password, image } = data;

  const searchUser = await User.findOne({
    where: { email },
  });

  if (searchUser) {
    return { status: httpStatus.CONFLICT_STATUS, error: 'User already registered' };
  }

  await User.create({ displayName, email, password, image });

  return { status: httpStatus.HTTP_CREATE_STATUS, message: 'User created' };
}

const getAllUser = async () => {
  const users = await User.findAll();

  return { status: httpStatus.HTTP_OK_STATUS, data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return { status: 404, message: 'User does not exist' };
  }

  return { status: 200, data: user };
};

module.exports = {
  createUserServices,
  getAllUser,
  getUserById,
};
