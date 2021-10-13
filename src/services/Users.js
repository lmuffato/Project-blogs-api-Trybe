const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().allow('').optional(),
});

const create = async (displayName, email, password, image) => {
  const { error, value } = userSchema.validate({ displayName, email, password, image });
  
  if (error) return { status: 400, message: error.message };

  const checkEmail = await User.findAll({ where: { email } });

  console.log('checkemail', checkEmail);

  if (checkEmail.length) return { status: 409, message: 'User already registered' };

  const createdUser = await User.create(value);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const data = {
    id: createdUser.id,
    displayName: createdUser.displayName,
    email: createdUser.email,
    image: createdUser.image || '',
  };

  const result = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);

  return { status: 201, result: { token: result } };
};

module.exports = {
  create,
};
