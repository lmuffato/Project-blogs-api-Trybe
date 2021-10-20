const auth = require('../auth/jwtFunctions');

const loginUser = async (loginDataUser) => {
  const getEmail = loginDataUser.email; // quando tiver um tempo livre, desfazer essa gambiarra
  const token = await auth.create(getEmail);
  return { token };
};

module.exports = { loginUser };
