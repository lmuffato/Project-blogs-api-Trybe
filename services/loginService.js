const { User } = require('../models');
const tokenGenerator = require('../util/tokenGenerator');

const postLogin = async (email1) => {
  try {
    const user = await User.findOne({
      where: {
        email: email1,
      },
    });

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

const getByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  postLogin,
  getByEmail,
};
