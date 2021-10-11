const schema = require('../utils/schema');
const { User } = require('../models');

const deleteByUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };

  const deletedUser = User.destroy({
    where:
    {
      id,
    },
  });

  return { status: 204, data: deletedUser };
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };

  return { status: 200, data: user };
};

const getAll = async () => {
  const users = await User.findAll();
  return { status: 200, data: users };
};

const check = (data) => {
  const { error } = schema.User.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  return false;
};

module.exports = {
  check,
  getAll,
  getById,
  deleteByUser,
};
