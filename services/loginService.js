const { Users } = require('../models');

const validEmail = (email) => {
  if (typeof email === 'undefined') {
    return {
      code: 400,
      message: '"email" is required',
    };
  }
  if (!email) {
    return {
      code: 400,
      message: '"email" is not allowed to be empty',
    };
  }
  return {};
};

const validPassword = (password) => {
  if (typeof password === 'undefined') {
    return {
      code: 400,
      message: '"password" is required',
    };
  }
  if (!password) {
    return {
      code: 400,
      message: '"password" is not allowed to be empty',
    };
  }
  return {};
};
const login = async (email, password) => {
  const verificaEmail = validEmail(email);
  if (verificaEmail.message) return verificaEmail;

  const verificaPassword = validPassword(password);
  if (verificaPassword.message) return verificaPassword;

  const user = await Users.findOne({ where: { email } });
  console.log(user);
  if (!user) {
    return {
      code: 400,
      message: 'Invalid fields', 
    };
  }
  return user;
};

module.exports = { login };