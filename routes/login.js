const routes = require('express').Router();

const { User } = require('../models');
const generateToken = require('../auth/generateToken');
const schemaValidation = require('../middlewares/schemaValidation');

const loginSchema = require('../schemas/login');

routes.post(
  '/',
  (req, res, next) => schemaValidation(req, res, next, loginSchema), 
  async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findAll({ where: { email, password } });
      if (!user.length) throw new Error('Invalid fields');
      const token = generateToken({ email });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
);

module.exports = routes;
