const joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { User } = require("../models");
const util = require('../util');

const validateUser = joi.object({
  displayName: joi.string().min(8),
  email: joi.string().email().required(),
  password: joi.string().length(6).required(),
});

const jwtSecret = "passwordNivelHard";

const createUser = async (user) => {
  const { displayName, email, password, image } = user
  const { error } = validateUser.validate({ displayName, email, password })

  if (error) {
    const { message } = error.details[0]
    throw util(message, 400);
  }

  const findEmail = await User.findAll({ where: { email: email } });

  if (findEmail.length > 0) {
    throw util('User already registered', 409)
  }

  await User.create({ displayName, email, password, image });

  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' }
  const token = jwt.sign(user, jwtSecret, jwtConfig);

  return token;
};

module.exports = {
  createUser,
};
