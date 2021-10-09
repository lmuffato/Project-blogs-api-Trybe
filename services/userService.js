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

module.exports = {
  create,
};
