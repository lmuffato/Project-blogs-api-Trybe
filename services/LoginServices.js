const {
  genToken,
} = require('../ultilities/genToken');

const Login = async (data) => {
  const { email } = data;
  const token = await genToken(email);
  return { token };
};

module.exports = {
  Login,
};