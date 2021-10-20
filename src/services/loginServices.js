const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const loginJoi = require('../middlewares/joi');
const httpStatus = require('../status/status');

const secret = 'supersecret';

const userLogin = async (data) => {
  const { error } = loginJoi.loginJoi.validate(data);

  if (error) {
    return { status: httpStatus.BAD_REQUEST, message: error.details[0].message };
  }

  const user = await User.findOne({ where: { email: data.email } });

  if (!user) {
    return { status: httpStatus.BAD_REQUEST, message: 'Invalid fields' };
  }

  const token = jwt.sign({ data: user }, secret);

  return { status: httpStatus.HTTP_OK_STATUS, data: { token } };
};

module.exports = {
  userLogin,
};
