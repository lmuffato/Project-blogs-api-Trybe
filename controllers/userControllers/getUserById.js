const rescue = require('express-rescue');
const { StatusCodes: { OK, NOT_FOUND } } = require('http-status-codes');
const { User } = require('../../models');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    res.status(NOT_FOUND).json({ message: 'User does not exist' });
  }

  res.status(OK).json(user);
});
