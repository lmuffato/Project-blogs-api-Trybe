const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().length(6).required(),
});

const generateToken = ({ dataValues }) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const data = {
    id: dataValues.id,
    displayName: dataValues.displayName,
    email: dataValues.email,
    image: dataValues.image || '',
  };

  const result = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);

  return result;
};

const login = async (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  
  if (error) return { status: 400, message: error.message };

  const getUser = await User.findOne({ where: { email, password } });

  if (getUser) {
    const token = generateToken(getUser);

    return { status: 200, result: { token } };
  }

  return { status: 400, message: 'Invalid fields' };
};

module.exports = {
  login,
  generateToken,
};
