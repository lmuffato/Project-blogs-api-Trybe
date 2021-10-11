const { User } = require('../models');
const tokenGenerator = require('../util/tokenGenerator');

const create = async (displayName, email, password, image) => {
  try {
    const user = await User.create({ displayName, email, password, image });
    const data = {
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    };
    const token = tokenGenerator(data);

    return token;
  } catch (e) {
    console.log(e);
  }
};

const findByEmail = async (email1) => {
  try {
    const user = await User.findAll({
      where: {
        email: email1,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

const getAll = async () => {
  try {
    const users = await User.findAll();
    const usersWithOutPass = users.map((e) => ({
      id: e.id,
      displayName: e.displayName,
      email: e.email,
      image: e.image,
    }));
    return usersWithOutPass;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  findByEmail,
  getAll,
};