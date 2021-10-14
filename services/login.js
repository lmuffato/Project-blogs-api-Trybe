const jwt = require('jsonwebtoken');
const { jwtConfig, secret } = require('../utils/jwtConfig');
const { User } = require('../models');
const Joi = require('../Joi/templates');

const login = async (body) => {
  const { error } = Joi.Login.validate(body);
  if (error) return { code: 400, message: error.details[0].message };

  const user = await User.findOne({ where: { email: body.email } });

  if (!user) return { code: 400, message: 'Invalid fields' };

  const token = jwt.sign({ data: body }, secret, jwtConfig);
  return token;
};

module.exports = {
  login,
};
