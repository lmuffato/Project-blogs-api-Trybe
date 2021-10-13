const rescue = require('express-rescue');
const { StatusCodes: { OK } } = require('http-status-codes');
const { User } = require('../../models');

module.exports = rescue(async (req, res) => {
    const users = await User.findAll();

    res.status(OK).json(users);
  });
