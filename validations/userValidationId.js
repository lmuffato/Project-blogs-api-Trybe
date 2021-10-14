const { StatusCodes: { NOT_FOUND } } = require('http-status-codes');
const rescue = require('express-rescue');
const { User } = require('../models');

const validateUserId = rescue(async (req, _res, next) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  if (result === null) {
    next({ statusCode: NOT_FOUND, message: 'User does not exist' });
  }
  next();
});

module.exports = validateUserId;
