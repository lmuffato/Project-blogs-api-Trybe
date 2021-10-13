const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().length(6).required(),
});

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const data = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image || '',
  };

  const result = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);

  return result;
};

const login = async (email, password) => {
  const { error } = loginSchema.validate({ email, password });

  console.log(error);
  
  if (error) return { status: 400, message: error.message };

  const getUser = await User.findAll({ where: { email, password } });

  if (getUser.length === 1) {
    const token = generateToken(getUser);

    return { status: 200, result: { token } };
  }

  return { status: 400, message: 'Invalid fields' };
};

module.exports = {
  login,
  generateToken,
};
