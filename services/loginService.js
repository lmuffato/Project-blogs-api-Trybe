const { tokenGenerator } = require('../token/tokenGenerator');

const loginService = async ({ email, password }) => {
  console.log(email, password, 'loginService');
  const token = tokenGenerator({ email, password });

  return { status: 200, token };
};

module.exports = {
  loginService,
};