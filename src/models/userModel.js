const { User } = require('../../models');

module.exports = {
  async createUser(displayName, email, password, image) {
    const createdUser = await User.create({
      displayName,
      email,
      password,
      image,
    });

    return createdUser;
  },

  async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });

    return user;
  },

  async getAllUsers() {
    const users = await User.findAll();

    return users;
  },

  async getUserById(id) {
    const user = await User.findOne({ where: { id } });

    return user;
  },
};
