const { User } = require('../models'); 

const createUser = async ({ displayName, email, password, image }) => User.create({
    displayName,
    email,
    password,
    image,
  });

const getAll = async () => {
  const user = await User.findAll();
  return user;
};

module.exports = {
  createUser,
  getAll,
};