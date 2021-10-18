const { User } = require('../models'); 

const findLogin = async ({ email }) => {
  const findEmail = await User.findOne({ where: { email } });
  // console.log('🚀 ~ file: loginService.js ~ line 5 ~ findLogin ~ findEmail', findEmail);
  if (!findEmail) {
    return { error: true, message: 'Invalid fields', status: 400 };
  }
  return findEmail;
};
  
module.exports = {
  findLogin,
};
