const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const invalidLoginError = {
  status: 400,
  errorMessage: { message: 'Campos inválidos' },
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userPayload = await User.findOne({ where: { email, password } });
  if (!userPayload) {
    return res.status(invalidLoginError.status).json(invalidLoginError.errorMessage);
  }
  const token = jwt.sign({ userPayload }, secret);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
