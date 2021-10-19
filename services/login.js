const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { loginValidation } = require('../utils/schema');

const { SEGREDO } = process.env;

const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;

const loginService = async (data) => {
  const { error } = loginValidation.validate(data);
  if (error) {
    return {
      status: BAD_REQUEST_STATUS,
      message: error.details[0].message,
    };
  }

  const findUser = await User.findOne({ where: { email: data.email } });
  if (!findUser) {
    return {
      status: BAD_REQUEST_STATUS,
      message: 'Invalid fields',
    };
  }

  const token = jwt.sign({ data: findUser }, SEGREDO);

  return { status: OK_STATUS, data: { token } };
};

module.exports = {
  loginService,
};
