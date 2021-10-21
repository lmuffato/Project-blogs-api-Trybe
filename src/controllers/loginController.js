require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const { User } = require('../models');

const successfulLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });

  const token = jwt.sign({ user }, SECRET);

  return res.status(200).json({ token });
};

module.exports = { successfulLogin };
