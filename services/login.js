const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { loginValidation } = require('../utils/schema');
require('dotenv').config();

const { JWT_SECRET } = process.env;

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

  // Ref. para local da message: Felipe Flores (https://github.com/tryber/sd-010-a-project-blogs-api/pull/15)

  const findUser = await User.findOne({ where: { email: data.email } });
  if (!findUser) {
    return {
      status: BAD_REQUEST_STATUS,
      message: 'Invalid fields',
    };
  }

  const { id, email } = findUser;
  const payload = { id, email };

  const token = jwt.sign(payload, JWT_SECRET);

  return { status: OK_STATUS, data: { token } };
};

module.exports = {
  loginService,
};
