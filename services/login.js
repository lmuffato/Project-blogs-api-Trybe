const jwt = require('jsonwebtoken');
const joiUser = require('../middlewares/schema');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

async function userLogin(data) {
  const { error } = joiUser.Login.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const user = await User.findOne({ where: { email: data.email, password: data.password } });
  if (!user) return { status: 400, message: 'Invalid fields' };

  const token = jwt.sign({ data: user }, JWT_SECRET);

  return { status: 200, data: { token } };
}

module.exports = { userLogin };