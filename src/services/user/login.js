const { User } = require('../../models');
const token = require('../../utils/token');
const { loginValidation } = require('../../middlewares/Users');

const userLogin = async (email, password) => {
  loginValidation(email, password);
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return;
  }
  
  return token.createToken(user);
};

module.exports = userLogin;