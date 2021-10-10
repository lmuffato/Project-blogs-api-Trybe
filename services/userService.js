const schema = require('../utils/schema');
const { User } = require('../models');

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
};
