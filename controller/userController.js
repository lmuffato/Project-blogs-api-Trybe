const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const loginService = require('../services/loginService');
const { HTTP_CREATED_STATUS, HTTP_OK_STATUS, HTTP_400, invFields } = require('../helpers');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const jwtConfiguration = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUsers = async (req, res) => {
  try {
      const { displayName,
      email,
        password,
        image } = req.body;
      const created = await userService.createUser({ displayName, email, password, image });
      const token = jwt.sign({ data: created }, JWT_SECRET, jwtConfiguration);
      return res.status(HTTP_CREATED_STATUS).json({ token });
    } catch (e) {
      console.log(e);
    }
};

const userLogin = async (req, res) => {
  try {
      const { email } = req.body;
      const get = await loginService.findLogin({ email });
      console.log('🚀 ~ file: userController.js ~ line 34 ~ userLogin ~ get', get);
      if (get.error) {
        return res.status(HTTP_400).json(invFields);
      }
      const token = jwt.sign({ data: get }, JWT_SECRET, jwtConfiguration);
      return res.status(HTTP_OK_STATUS).json({ token });
    } catch (e) {
      console.log(e);
    }
};

module.exports = {
  createUsers,
  userLogin,
};