const rescue = require('express-rescue');
const { Op } = require('sequelize');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { loginSchema } = require('../schemas/loginSchema');
const { User } = require('../models');

const validateLogin = rescue(async (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });
  const { email, password } = req.body;
  // const { email } = req.body;

  // const user = await User.findOne({ where: { email } });
  const user = await User.findOne({
    where: {
      [Op.and]: [
        { email },
        { password },
      ],
    },
  });
  if (!user) {
    next({ message: 'Invalid fields', statusCode: BAD_REQUEST });
  }
  next();
});

module.exports = validateLogin;