const { User } = require('../../models');
const { status } = require('../utils');

const addUsers = async (displayName, email, password, image) => {
  await User.create(
    {
      displayName,
      email,
      password,
      image,
    },
  );
  return true;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return {
    code: status.HTTP_STATUS_OK,
    users,
  };
};

const checkEmailExists = async (email) => {
  const exists = await User.findOne({ where: { email } });
  if (exists) return true;
};

module.exports = {
  addUsers,
  getUsers,
  checkEmailExists,
};

// Como excluir um atributo no findAll:
// https://stackoverflow.com/questions/31679838/sequelizejs-findall-exclude-field