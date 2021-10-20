const { User } = require('../models');
const createToken = require('../auth/jwtFunctions');

const loginUser = async (data) => {
  const { email } = data;

  const findUser = await User.findOne({ where: { email } });
  if (!findUser) return { status: 400, data: { message: 'Invalid fields' } };

  const payload = { email };
  const token = createToken.create(payload);

  return { status: 200, data: { token } };
};

module.exports = { 
  loginUser,
};
