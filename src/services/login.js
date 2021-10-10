const jwt = require('jsonwebtoken');
const { User } = require('../models');
const Schema = require('../utils/schema');

const { JWT_SECRET = 'Vaitentando123' } = process.env;

const userLogin = async (data) => {
  const { error } = Schema.Login.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const user = await User.findOne({ where: { email: data.email } });
  if (!user) return { status: 400, message: 'Invalid fields' };
  const token = jwt.sign({ data: user }, SECRET);

  return { status: 200, data: { token } };
};

module.exports = {
  userLogin,
};
