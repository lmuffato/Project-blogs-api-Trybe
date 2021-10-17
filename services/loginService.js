const { User } = require('../models'); 

const findLogin = async ({ email, password }) => User.findOne({ WHERE: { email, password } });

module.exports = {
  findLogin,
};
