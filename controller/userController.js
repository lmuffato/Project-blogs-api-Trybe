const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const { HTTP_CREATED_STATUS } = require('../helpers');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const jwtConfiguration = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUsers = async (req, res) => {
  const { displayName,
    email,
    password,
    image } = req.body;

    try {
      const created = await userService.createUser({ displayName, email, password, image });
      const token = jwt.sign({ data: created }, JWT_SECRET, jwtConfiguration);
      return res.status(HTTP_CREATED_STATUS).json({ token });
    } catch (e) {
      console.log(e);
    }
};

module.exports = {
  createUsers,
};